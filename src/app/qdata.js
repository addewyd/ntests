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
                    withgender: false
                }
            }
export { qMnqw, qGds, qHdrs };
