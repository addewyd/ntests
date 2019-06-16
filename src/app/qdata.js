var  qMnqw =
        function()  {
        return {
            type: 'ORT',
            q: [
                {
                    text: 'Family history of substance abuse? Alcohol',
                    answer: false,
                    scoref: 1,
                    scorem: 3
                },
                {
                    text: 'Family history of substance abuse? Illegal drugs',
                    answer: false,
                    scoref: 2,
                    scorem: 3
                },
                {
                    text: 'Family history of substance abuse? Prescription drugs',
                    answer: false,
                    scoref: 4,
                    scorem: 4
                },
                {
                    text: 'Personal history of substance abuse? Alcohol',
                    answer: false,
                    scoref: 3,
                    scorem: 3
                },
                {
                    text: 'Personal history of substance abuse? Illegal drugs',
                    answer: false,
                    scoref: 4,
                    scorem: 4
                },
                {
                    text: 'Personal history of substance abuse? Prescription drugs',
                    answer: false,
                    scoref: 5,
                    scorem: 5
                },
                {
                    text: 'Are you between 16 years old and 45 years old?',
                    answer: false,
                    scoref: 1,
                    scorem: 1
                },
                {
                    text: 'History of preadolescent sexual abuse?',
                    answer: false,
                    scoref: 3,
                    scorem: 0
                },
                {
                    text: 'Psychological Disease:  Do you have a history of ADD, OCD, Bipolar Disease, or Schizophrenia?',
                    answer: false,
                    scoref: 2,
                    scorem: 2
                },
                {
                    text: 'Psychological Disease: Do you have a history of Depression?',
                    answer: false,
                    scoref: 1,
                    scorem: 1
                }
            ],
            withgender: true,
            title: "Opioid Risk Tool"
        };
}

var  qGds = function() {
        return {
                type: 'GDS',
                q:
                    [
                {
                    text: 'Psychological Disease: Do you have a history of Depression?',
                    answer: false,
                    score: 1
                }

                    ],
            withgender: false,
            title: "Gds"
        };
}

var  qHdrs = function() {
        return {
                type: 'HDRS',
                q:
                    [
                {
                        text: "Depressed mood",
                        answers: [
                            {text:"Absent", val: 1},
                            {text:"These feeling...", val: 2},
                            {text:"These feeling...", val: 3},
                            {text:"Communicates...", val: 4},
                            {text:"Patient...", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "Feelings of guilt",
                        answers: [
                            {text:"Absent", val: 1},
                            {text:"Self reroach...", val: 2},
                            {text:"Ideas of guilt...", val: 3},
                            {text:"predent illness...", val: 4},
                            {text:"Hears...", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                }
                    ],
                    title: "HDRS",
                    withgender: false
                }
            }
export { qMnqw, qGds, qHdrs };
