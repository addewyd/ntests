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
            title: "Geriatric Depression Scale",
            addinfo: "Circle the answer that best describes how you felt over the past week"
        };
}

var  qHdrs = function() {
        return {
                type: 'HDRS',
                q:
                    [
                {
                        text: "DEPRESSED MOOD (asdness. hopeless, helpless, worthless)", //1
                        answers: [
                            {text:"Absent", val: 1},
                            {text:"These feeling states indicated only on questioning", val: 2},
                            {text:"These feeling states spontaneously reported verbally", val: 3},
                            {text:"Communicates feeling states non-verbally. i.e. through facial expression, posture, voice and tendency to weep", val: 4},
                            {text:"Patient reports virtually only these feeling states in his/her spontaneous verbal and non-verbal communication", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "FEELINGS OF GUILT",//2
                        answers: [
                            {text:"Absent", val: 1},
                            {text:"Self reproach, feds he/she has let people down", val: 2},
                            {text:"Ideas of guilt or rumination over past errors or sinful deeds", val: 3},
                            {text:"Present illness is a punishment. Delusions of guilt", val: 4},
                            {text:"Hears accusatory or denunciatory voices and/or experiences threatening visual hallucinations", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "SUICIDE",//3
                        answers: [
                            {text:"Absent", val: 1},
                            {text:"Feels life is not worth living", val: 2},
                            {text:"Wishes he/she were dead or any thoughts of possible death to self", val: 3},
                            {text:"Ideas or gestures of suicide", val: 4},
                            {text:"Attempts at suicide (any serious attempt rate 4)", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "INSOMNIA; EARLY IN THE NIGHT", //4
                        answers: [
                            {text:"No difficulty falling asleep", val: 1},
                            {text:"Complains of occasional difficulty falling asleep, i.e. more than 2 hour", val: 2},
                            {text:"Complains of nightly difficulty falling asleep", val: 3}
                            ],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "INSOMNIA; MIDDLE IN THE NIGHT", //5
                        answers: [
                            {text:"No difficulty", val: 1},
                            {text:"Patient complains of being restless and disturbed during the night", val: 2},
                            {text:"Waking during the night - any getting out of bed rates 2 (except for purposes of voiding)", val: 3}
                            ],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "INSOMNIA: EARLY HOURS OF THE MORNING", //6
                        answers: [
                            {text:"No difficulty", val: 1},
                            {text:"Waking in early hours of the morning but goes back to sleep", val: 2},
                            {text:"Unable to fall asleep again if he/she gets out of bed", val: 3}
                            ],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "WORK AND ACTIVITIES",//7
                        answers: [
                            {text:"No difficulty", val: 1},
                            {text:"Thoughts and feelings of incapacity, fatigue or weakness related to activities, work or hobbies", val: 2},
                            {text:"Loss of interest in activity, hobbies or work - either directly reported by the patient or indirect in listlessness, indecision and vacillation (feels he/she has to push self to work or activities", val: 3},
                            {text:"Decrease in actual time spent in activities or decrease in productivity. Race 3 if the patient does not spend at least three hours a day in activities (job or hobbies) excluding routine chores", val: 4},
                            {text:"Stopped working because of present illness. Rate 4 if patient engages in no activities except routine chores, or if patient fails to perform routine chores unassisted", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "RETARDATION (slowness of thought and speech, impaired ability to concentrate, decreased motor activity)",//8
                        answers: [
                            {text:"Normal speech and thought", val: 1},
                            {text:"Slight retardation during the interview", val: 2},
                            {text:"Obvious retardation during the interview", val: 3},
                            {text:"Interview difficult", val: 4},
                            {text:"Complete stupor", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "AGITATION",//9
                        answers: [
                            {text:"None", val: 1},
                            {text:"Fidgetiness", val: 2},
                            {text:"Playing with hands, hair, etc", val: 3},
                            {text:"Moving about, can't sit still", val: 4},
                            {text:"Hand wringing, nail biting, hair-pulling, biting of lips", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "ANXIETY PSYCHIC",//10
                        answers: [
                            {text:"No difficulty", val: 1},
                            {text:"Subjective tension and irritability", val: 2},
                            {text:"Worrying about minor matters", val: 3},
                            {text:"Apprehensive attitude apparent in face or speech", val: 4},
                            {text:"Fears expressed without questioning", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "ANXIETY SOMATIC (physiological concomitants of anxiety) such as: " +
"gastrointestinal - dry mouth, wind, indigestion, diarrhea, cramps, belching " +
"cardiovascular - palpitations, headaches respiratory - hyperventilation, sighing urinary frequency sweating"
, //11
                        answers: [
                            {text:"Absent", val: 1},
                            {text:"Mild", val: 2},
                            {text:"Moderate", val: 3},
                            {text:"Severe", val: 4},
                            {text:"Incapacitating", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "SOMATIC SYMPTOMS GASTRO-INTESTINAL",//12
                        answers: [
                            {text:"None", val: 1},
                            {text:"Loss of appetite but eating without staff encouragement. Heavy feelings in abdomen", val: 2},
                            {text:"Difficulty eating without staff urging. Requests or requires laxatives or medication for bowels or medication for gastro-intestinal symptoms", val: 3}
                        ],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "GENERAL SOMATIC SYMPTOMS",//13
                        answers: [
                            {text:"None", val: 1},
                            {text:"Heaviness in limbs, back or head. Backaches, headaches, muscle aches. Loss of energy and fatigability", val: 2},
                            {text:"Any clear-cut symptom rates 2", val: 3}
                        ],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "GENITAL SYMPTOMS",//14
                        answers: [
                            {text:"Absent", val: 1},
                            {text:"Mild", val: 2},
                            {text:"Severe", val: 3}
                        ],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "HYPOCHONDRIASIS",//15
                        answers: [
                            {text:"Not present", val: 1},
                            {text:"Self-absorption (bodily)", val: 2},
                            {text:"Preoccupation with health", val: 3},
                            {text:"Frequent complaints, requests for help, etc", val: 4},
                            {text:"Hypochondriacal delusions", val: 5}],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "LOSS OF WEIGHT (RATE EITHER a OR b. a) According to the patient; b) According to weekly measurements",//16
                        answers: [
                            {text:"a) No weight loss; b) Less than I lb weight loss in week", val: 1},
                            {text:"a) Probable weight loss associated with present illness; b) Greater than i lb weight loss in week", val: 2},
                            {text:"a) Definite (according to patient) weight loss; b) Greater than 2 lb weight loss in week", val: 3},
                            {text:"Not assessed", val: 4}
                        ],
                    answer: false
                    // answerm
                    // answerf
                },
                {
                        text: "INSIGHT",//15
                        answers: [
                            {text:"Acknowledges being depressed and ill", val: 1},
                            {text:"Acknowledges illness but attributes cause to bad food, climate, overwork", val: 2},
                            {text:"Denies being ill at all", val: 3}],
                    answer: false
                    // answerm
                    // answerf
                }
                    ],
                    title: "Hamilton Depression Rating Scale",
                    addinfo: false,
                    withgender: false
                }
            }

var  qPhq9 = function() {
        return {
                type: 'PHQ9',
                q:[
                    {
                        text: "Little interest or pleasure in doing things",//1
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Feeling down, depressed, or hopeless",//2
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Trouble falling or staying asleep, or sleeping too much",//3
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Feeling tired or having little energy",//4
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Poor appetite or overeating",//5
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",//6
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Trouble concentrating on things, such as reading the newspaper or watching television",//7
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Moving or speaking so slowly that other people could have noticed. Or the opposite being so figety or restless that you have been moving around a lot more than usual",//8
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Thoughts that you would be better off dead, or of hurting yourself",//9
                        answers: [
                            {text:"Not at all", val: 1},
                            {text:"Several days", val: 2},
                            {text:"More than half the days", val: 3},
                            {text:"Nearly every day", val: 4}
                        ],
                    answer: false
                    },
                    // ??
                    {
                        text: "If you checked off any problems, how difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",//10
                        answers: [
                            {text:"Not difficult at all", val: 1},
                            {text:"Somewhat difficult", val: 2},
                            {text:"Very difficult", val: 3},
                            {text:"Extremely difficult", val: 4}
                        ],
                    answer: false
                    }

                ],
                    title: "PATIENT HEALTH QUESTIONNAIRE (PHQ-9)",
                    addinfo: 'Over the last 2 weeks, how often have you been bothered by any of the following problems?',
                    withgender: false
                }
            }

var  qSds = function() { // scoring? There are ten positively worded and ten negatively worded questions
        return {
                type: 'SDS',
                q:[
                    {
                        text: "I feel down-hearted and blue",//1
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "Morning is when I feel the best",//2
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I have crying spells or feel like it",//3
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I have trouble sleeping at night",//4
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I eat as much as I used to",//5
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I still enjoy sex",//6
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I notice that I am losing weight",//7
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I have trouble with constipation",//8
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "My heart beats faster than usual",//9
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I get tired for no reason",//10
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "My mind is as clear as it used to be",//11
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I find it easy to do the things I used to",//12
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I am restless and can't keep still",//13
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I feel hopeful about the future",//14
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I am more irritable than usual",//15
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I find it easy to make decisions",//16
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I feel that I am useful and needed",//17
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "My life is pretty full",//18
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I feel that others would be better off if I were dead",//19
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I still enjoy the things I used to do",//20
                        answers: [
                            {text:"A little of the time", val: 1},
                            {text:"Some of the time", val: 2},
                            {text:"Good part of the time", val: 3},
                            {text:"Most of the time", val: 4}
                        ],
                    answer: false
                    }

                ],
                    title: "Zung Self-Rating Depression Scale (SDS)",
                    addinfo: 'For each item below, please place a check  the item which best describes how often you felt or behaved this way during the past several days',
                    withgender: false,
                    addsco: +1
                }
            }

var  qEpds = function() {
        return {
                type: 'EPDS',
                q:[
                    {
                        text: "I have been able to laugh and see the funny side of things",//1
                        answers: [
                            {text:"As much as I always could", val: 1},
                            {text:"Not quite so much now", val: 2},
                            {text:"Definitely not so much now", val: 3},
                            {text:"Not at all", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I have looked forward with enjoyment to things",//2
                        answers: [
                            {text:"As much as I ever did", val: 1},
                            {text:"Rather less than I used to", val: 2},
                            {text:"Definitely less than I used to", val: 3},
                            {text:"Hardly at all", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I have blamed myself unnecessarily when things went wrong",//3
                        answers: [ //* reverse order
                            {text:"Yes, most of the time", val: 4},
                            {text:"Yes, some of the time", val: 3},
                            {text:"Not very often", val: 2},
                            {text:"No, never", val: 1}
                        ],
                    answer: false
                    },
                    {
                        text: "I have been anxious or worried for no good reason",//4
                        answers: [
                            {text:"No, not at all", val: 1},
                            {text:"Hardly ever", val: 2},
                            {text:"Yes, sometimes", val: 3},
                            {text:"Yes, very often", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "I have felt scared or panicky for no very good reason",//5
                        answers: [ //* reverse order
                            {text:"Yes, quite a lot", val: 4},
                            {text:"Yes, sometimes", val: 3},
                            {text:"No, not much", val: 2},
                            {text:"No, not at all", val: 1}
                        ],
                    answer: false
                    },
                    {
                        text: "Things have been getting on top of me",//6
                        answers: [ //* reverse order
                            {text:"Yes, most of the time I haven't been able to cope at all", val: 4},
                            {text:"Yes, sometimes I haven't been coping as well as usual", val: 3},
                            {text:"No, most of the time I have coped quite well", val: 2},
                            {text:"No, I have been coping as well as ever", val: 1}
                        ],
                    answer: false
                    },
                    {
                        text: "I have been so unhappy that I have had difficulty sleeping",//7
                        answers: [ //* reverse order
                            {text:"Yes, most of the time", val: 4},
                            {text:"Yes, sometimes", val: 3},
                            {text:"Not very often", val: 2},
                            {text:"No, not at all", val: 1}
                        ],
                    answer: false
                    },
                    {
                        text: "I have felt sad or miserable",//8
                        answers: [ //* reverse order
                            {text:"Yes, most of the time", val: 4},
                            {text:"Yes, quite often", val: 3},
                            {text:"Not very often", val: 2},
                            {text:"No, not at all", val: 1}
                        ],
                    answer: false
                    },
                    {
                        text: "I have been so unhappy that I have been crying",//9
                        answers: [ //* reverse order
                            {text:"Yes, most of the time", val: 4},
                            {text:"Yes, quite often", val: 3},
                            {text:"Only occasionally", val: 2},
                            {text:"No, never", val: 1}
                        ],
                    answer: false
                    },
                    {
                        text: "The thought of harming myself has occurred to me",//10
                        answers: [ //* reverse order
                            {text:"Yes, quite often", val: 4},
                            {text:"Sometimes", val: 3},
                            {text:"Hardly ever", val: 2},
                            {text:"Never", val: 1}
                        ],
                    answer: false
                    }
                ],
                    title: "Edinburgh Postnatal Depression Scale (EPDS)",
                    addinfo: 'As you are pregnant or have recently had a baby, we would like to know how you are feeling. Please check the answer that comes closest to how you have felt IN THE PAST 7 DAYS, not just how you feel today.',
                    withgender: false,
                    addsco: false
                }
            }

var  qBdi = function() {
        return {
                type: 'BDI',
                q:[
                    {
                        text: "",//1
                        answers: [
                            {text:"I do not feel sad", val: 1},
                            {text:"I feel sad", val: 2},
                            {text:"I am sad all the time and I can't snap out of it", val: 3},
                            {text:"I am so sad and unhappy that I can't stand it", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//2
                        answers: [
                            {text:"I am not particularly discouraged about the future", val: 1},
                            {text:"I feel discouraged about the future", val: 2},
                            {text:"I feel I have nothing to look forward to", val: 3},
                            {text:"I feel the future is hopeless and that things cannot improve", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//3
                        answers: [
                            {text:"I do not feel like a failure", val: 1},
                            {text:"I feel I have failed more than the average person", val: 2},
                            {text:"As I look back on my life, all I can see is a lot of failures", val: 3},
                            {text:"I feel I am a complete failure as a person", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//4
                        answers: [
                            {text:"I get as much satisfaction out of things as I used to", val: 1},
                            {text:"I don't enjoy things the way I used to", val: 2},
                            {text:"I don't get real satisfaction out of anything anymore", val: 3},
                            {text:"I am dissatisfied or bored with everything", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//5
                        answers: [
                            {text:"I don't feel particularly guilty", val: 1},
                            {text:"I feel guilty a good part of the time", val: 2},
                            {text:"I feel quite guilty most of the time", val: 3},
                            {text:"I feel guilty all of the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//6
                        answers: [
                            {text:"I don't feel I am being punished", val: 1},
                            {text:"I feel I may be punished", val: 2},
                            {text:"I expect to be punished", val: 3},
                            {text:"I feel I am being punished", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//7
                        answers: [
                            {text:"I don't feel disappointed in myself", val: 1},
                            {text:"I am disappointed in myself", val: 2},
                            {text:"I am disgusted with myself", val: 3},
                            {text:"I hate myself", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//8
                        answers: [
                            {text:"I don't feel I am any worse than anybody else", val: 1},
                            {text:"I am critical of myself for my weaknesses or mistakes", val: 2},
                            {text:"I blame myself all the time for my faults", val: 3},
                            {text:"I blame myself for everything bad that happens", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//9
                        answers: [
                            {text:"I don't have any thoughts of killing myself", val: 1},
                            {text:"I have thoughts of killing myself, but I would not carry them out", val: 2},
                            {text:"I would like to kill myself", val: 3},
                            {text:"I would kill myself if I had the chance", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//10
                        answers: [
                            {text:"I don't cry any more than usual", val: 1},
                            {text:"I cry more now than I used to", val: 2},
                            {text:"I cry all the time now", val: 3},
                            {text:"I used to be able to cry, but now I can't cry even though I want to", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//11
                        answers: [
                            {text:"I am no more irritated by things than I ever was", val: 1},
                            {text:"I am slightly more irritated now than usual", val: 2},
                            {text:"I am quite annoyed or irritated a good deal of the time", val: 3},
                            {text:"I feel irritated all the time", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//12
                        answers: [
                            {text:"I have not lost interest in other people", val: 1},
                            {text:"I am less interested in other people than I used to be", val: 2},
                            {text:"I have lost most of my interest in other people", val: 3},
                            {text:"I have lost all of my interest in other people", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//13
                        answers: [
                            {text:"I make decisions about as well as I ever could", val: 1},
                            {text:"I put off making decisions more than I used to", val: 2},
                            {text:"I have greater difficulty in making decisions more than I used to", val: 3},
                            {text:"I can't make decisions at all anymore", val: 4}
                        ],
                    answer: false
                    },
                    {
                        text: "",//14
                        answers: [
                            {text:"I don't feel that I look any worse than I used to", val: 1},
                            {text:"I am worried that I am looking old or unattractive", val: 2},
                            {text:"I feel there are permanent changes in my appearance that make me look unattractive", val: 3},
                            {text:"I believe that I look ugly", val: 4}
                        ],
                    answer: false
                    }

                ],
                    title: "Beck's Depression Inventory",
                    addinfo: 'This depression inventory can be self-scored. The scoring scale is at the end of the questionnaire.',
                    withgender: false,
                    addsco: false
                }
            }

export { qMnqw, qGds, qHdrs, qPhq9, qSds, qEpds, qBdi };
