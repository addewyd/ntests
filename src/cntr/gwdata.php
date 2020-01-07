<?php

require('fpdf/fpdf.php');
require('slogger.php');

function returnResult ($answer) {

        ob_start();
        ob_end_clean();
        Header('Cache-Control: no-cache');
        Header('Pragma: no-cache');
        header('Content-type: application/json; charset=UTF-8');
        echo json_encode($answer);
}

function getpdflist($n) {
    $files = glob('../saved/*.pdf');
    usort($files, function($a, $b) {
        return filemtime($a) < filemtime($b);
    });
    return $files;
}

function gwdata($r) {
    $res = ''; $files = [];
    try {
        if(isset($r['fname'])) {
            //$fn = $r['fname'];
//            file_put_contents('../saved/s', json_encode($r));
            $fn = save_pdf($r);
            $files = getpdflist(10);
            $res = ['result' => $fn, 'req' => $r, 'files' => $files];
        }
        if(isset($r['init'])) {
            $res = ['result' => trim(file_get_contents('pass'))];
        } else {
            $res = ['result' => "bad file name", 'req' => $r, 'files' => $files];
        }
    }
    catch(Exception $e)
    {
        $res = ['result' => $e, 'req' => $r, 'files' => []];
    }
    returnResult($res);
}

// .............................................................................

function DrawTable($header, $data, $t)
{
    // Column widths
    //$w = array(40, 35, 40, 45);

    // Header
        $t->SetFont('Arial','B', 9);

    $rlen = count($header);

    foreach($header as $h) {
        $t->Cell($h[1],7,$h[0],1,0,'C');
    }
    $t->Ln();
            $t->SetFont('Arial','', 9);

    // Data
    foreach($data as $row)
    {
        if($row[0] == '_last') {
            for($i = 0; $i < $rlen; $i ++) {
                $t->Cell($header[$i][1],0,'','T');
            }
            //$t->Cell($header[1][1],0,'','T');
            //$t->Cell($header[2][1],0,'','T');
            //$t->Cell($header[3][1],0,'','T');
        }
        else {
            for($i = 0; $i < $rlen; $i ++) {
                $t->Cell($header[$i][1],6,$row[$i], $row[$rlen]? 'LTR':'LR');
            }
            //$t->Cell($header[1][1],6,$row[1],$row[4]? 'LTR':'LR');
            //$t->Cell($header[2][1],6,$row[2],$row[4]? 'LTR':'LR');
            //$t->Cell($header[3][1],6,$row[3],$row[4]? 'LTR':'LR');
            $t->Ln();
        }
    }
}

function rspd($x, $g, $gn) {
    if ($gn== $g && $x['answer']=='yes')
        return 'X';
    else return ' ';
}
// types ORT GDS HDRS PHQ9 SDS EPDS BDI
function save_pdf($r) {
    $type = $r['type'];
    $fname = $r['fname'];
    $fdate = $r['fdate'];
    $data = $r['data'];
    $gender = $r['gender'];
    $dur =   intval($r['dur']);
    $min = floor($dur / 60);
    $sec = $dur % 60;
    $score = $r['score'];
    $title = $r['title'];
    $addsco = $r['addsco']?? 0;

    $sdur = "$min min $sec sec";

    $dd = date_create();
    $ddate = date_format($dd, "Ymd-His");
    $filename = '../saved/' . $type . '/' .$fname."_" .$ddate;
    //file_put_contents($filename, print_r($data,  true));
    $g = '';
    if($gender === '') {
        $g = '';
    } else {
        $g = substr($gender, 0, 1);
    }

    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial','B',16);
    $gg = $gender==='' ? '' : ' (' . $gender . ')';
    $pdf -> Cell(0, 10, $title . ' ' . $gg , 0, 1, 'C');

    $pdf -> Cell(0, 10, '[' . $type . $g.']', 0, 1, 'C');

    //$pdf->Output('F', $filename . '.pdf', true);

    $pdf->SetFont('Arial','', 8);

    $pdf->SetXY(10, 36);
    $pdf -> Cell(0, 0, 'Patient: ' . $fname, 0, 1, 'L');

// begin ort stuff
    if ($type === 'ORT') {
        $pdf->SetXY(130, 36);
        $pdf->Cell(0, 0, 'Provider: Cheryle Hart MD', 0, 1, 'L');

        $pdf->SetXY(10, 40);
        $pdf->Cell(0, 0, 'Location: Main Office', 0, 1, 'L');
        $pdf->SetXY(130, 40);
        $pdf->Cell(0, 0, 'Battery ID 0000', 0, 1, 'L');

        $pdf->SetXY(10, 44);
        $pdf->Cell(0, 0, 'Started: ' . $fdate, 0, 1, 'L');
        $pdf->SetXY(130, 44);
        $pdf->Cell(0, 0, 'Test Duration: ' . $sdur, 0, 1, 'L');

        $pdf->SetXY(10, 50);

        $pdf->SetFont('Arial', '', 12);
        $pdf->Cell(0, 10, 'Assessment Results', 0, 1, 'L');

        $pdf->SetFont('Arial', 'B', 7);
        $pdf->Cell(0, 4, '1) Please clearly state the medical need for administering this assessment:', 0, 1, 'L');
        $pdf->SetFont('Arial', '', 7);
        $pdf->Cell(0, 4, 'See patient record for medical necessity', 0, 1, 'L');
        $pdf->Ln();

        $pdf->SetFont('Arial', 'B', 7);

        $pdf->Cell(0, 4, '2) Describe the pertinent findings of of the assessment', 0, 1, 'L');
        $pdf->SetFont('Arial', '', 7);
        $pdf->Cell(0, 4, 'Total: ' . $score, 0, 1, 'L');

        $pdf->Ln();
        $pdf->Cell(0, 4, 'The ORT may identify patients at high risk for misuse, '
                . 'and who might benefit more from other modalities of plan control'
                . ' besides narcotics (prinarily applicable with chronic pain', 0, 1, 'L');

        $pdf->Ln();
        $pdf->SetX(40);
        $pdf->Cell(0, 4, 'Score of 0-3 Low Risk of Opioid Addiction', 0, 1, 'L');
        $pdf->SetX(40);
        $pdf->Cell(0, 4, 'Score of 4-7 Moderate Risk of Opioid Addiction', 0, 1, 'L');
        $pdf->SetX(40);
        $pdf->Cell(0, 4, 'Score of >= 8 High Risk of Opioid Addiction', 0, 1, 'L');

        $pdf->Ln();

        $pdf->SetFont('Arial', 'B', 7);

        $pdf->Cell(0, 4, '3) Please state the plan of treatment as a result of the assessment:', 0, 1, 'L');
        $pdf->SetFont('Arial', '', 7);
        $pdf->Cell(0, 4, 'See patient record for medical findings', 0, 1, 'L');
        $pdf->Ln();
    }
// end ort stuff
    else {

        $pdf->SetXY(10, 44);
        $pdf->Cell(0, 0, 'Started: ' . $fdate, 0, 1, 'L');
        $pdf->SetXY(130, 44);
        $pdf->Cell(0, 0, 'Test Duration: ' . $sdur, 0, 1, 'L');

        $pdf->Cell(0, 4, 'Total: ' . $score, 0, 1, 'L');

    }

    $pdf->SetFont('Arial','B',14);
    $pdf -> Cell(0, 10, 'QUESTIONS', 0, 1, 'L');

    //  answers
    $pdf->SetFont('Arial','', 9);
    $acnt = 1;
    $maxtlen = 100;
    foreach($data as $d) {
        if($d['text']) {
            $text = $d['text'];
            while(TRUE) {
                $tlen = strlen($text);
                if($tlen <= $maxtlen) {
                    $pdf -> Cell(0, 4, $text, 0, 1, 'L');
                    break;
                } else {
                    $t = substr($text, 0, $maxtlen);
                    $pdf -> Cell(0, 4, $t, 0, 1, 'L');
                    $text = substr($text, $maxtlen);
                }
            }
        }
        else {
            $pdf -> Cell(0, 4, $acnt .')', 0, 1, 'L');
        }
        $aa = 0;

        if($d['answer'] === 'yes' || $d['answer'] === 'no') { // actual answer can be  more than 0 () hd type or yes/no (mn type)
            $aa = $d['answer'];
        } else {
            $aa = '' . ((intval($d['answer']) - 1) + $addsco);
        }
        $pdf -> Cell(0, 8, '' . $aa, 0, 1, 'L');
        $acnt ++;
        //$pdf -> Ln();
    }

    if($type == 'PHQ9') {

        $h = [['',75], ['Not at all',15], ['Several days',24],
            ['More than half the days',36], ['Nearly every day', 26]];
        $t = [];
        foreach($data as $d) {
            $a = [ substr($d['text'], 0, 50),' ',' ',' ',' ', TRUE];
            $u = intval($d['answer']);
            $a[$u] = 'X';
            array_push($t, $a);
        }
        $a = ['_last', '','','', '', TRUE];
        array_push($t, $a);
        DrawTable($h, $t, $pdf);
    }

    $s = $pdf->Output('S', $filename . '', true);
    file_put_contents($filename . '_' . $type . '.pdf', $s);

    return $filename;

}


gwdata($_REQUEST);

