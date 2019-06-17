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
                    text: 'Are you basically satisfied with your life?', //1
                    answer: false,
                    score: -1
                },
                {
                    text: 'Have you dropped many of your activities and interests?',//2
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you feel that your life is empty?',//3
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you often get bored?',//4
                    answer: false,
                    score: 1
                },
                {
                    text: 'Are you in good spirits most of the time?',//5
                    answer: false,
                    score: -1
                },
                {
                    text: 'Are you afraid that something bad is going to happen to you?',//6
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you feel happy most of the time?',//7
                    answer: false,
                    score: -1
                },
                {
                    text: 'Do you often feel helpless?',//8
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you prefer to stay at home, rather than going out and doing things?',//9
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you feel that you have more problems with memory than most?',//10
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you think it is wonderful to be alive now?',//11
                    answer: false,
                    score: -1
                },
                {
                    text: 'Do you feel worthless the way you are now?',//12
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you feel full of energy?',//13
                    answer: false,
                    score: -1
                },
                {
                    text: 'Do you feel that your situation is hopeless?',//14
                    answer: false,
                    score: 1
                },
                {
                    text: 'Do you think that most people are better off than you are?',//15
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
                            {text:"These feeling states indicated only on questioning.", val: 2},
                            {text:"These feeling states spontaneously reported verbally.", val: 3},
                            {text:"Communicates feeling states non-verbally. i.e. through facial expression, posture, voice and tendency to weep.", val: 4},
                            {text:"Patient reports virtually only these feeling states in his/her spontaneous verbal and non-verbal communication.", val: 5}],
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
                },
                {
                        text: "Suicide",
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
