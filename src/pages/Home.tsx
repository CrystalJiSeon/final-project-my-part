// src/pages/Home.jsx


function Home(props) {

    return (
        <>
            <h1>인덱스 페이지입니다</h1>  
        
        </>
    );
}

// function Quiz(){
//     //const inputAnswer = useRef();
//     const handleSubmit=()=>{
//         axios.post("/gemini/quiz", {
//             quizes:quizes[state.index], answer:state.inputCode //질문과 입력한 답을 json으로 응답한다
//         })
//         .then(res=>{
//             console.log(res.data)
//             setState({...state, ...res.data, isAnswered:true})
//         })
//         .catch(error=>console.log(error))
//     }
//     let quizes =[
//         "콘솔창에 1~10까지 순서대로 출력하는 코드를 자바스크립트로 작성해보세요.",
//         "myName 이라는 변수를 만들고 본인의 이름을 대입해보세요",
//         "object에 name이라는 키값으로 본인의 이름을 넣고 addr이란 키값으로 주소를 넣어보세요요"

//     ]
//     const [isAnswered, setAnswered] = useState(false)
//     const [state,setState]=useState({index:0, isAnswered:false, isCorrect:false, inputCode:""})//입력한 코드를 state로 관리
//     const handleRetry=()=>{
//         setState({...state, isAnswered:false})
//     }

//     const handleNext=()=>{
//         //문제의 index 1 증가, isAnswered: false, inputCode:""
//         setState({...state, index:state.index+1, isAnswered:false, inputCode:""})
//     }

//     const handleChange=(e)=>{
//         setState({...state, inputCode:e.target.value})
//     }
//     return(
//         <> 
//             { isAnswered?
//                 <>        
//                     <div>
//                     <h3>체점 결과</h3>
//                     { state.isCorrect ?
//                         <Alert variant='success' >축하 합니다 정답 입니다</Alert>
//                         :
//                         <Alert variant='danger' >오답 입니다</Alert>
//                     }
//                     <MarkDown >{state.comment}</MarkDown>
//                     <Button onClick={handleRetry} variant='warning' className="me-3"> &larr; 다시 풀기</Button>
//                     <Button onClick={handleNext} variant='success'>다음 문제 &rarr;</Button>
//                     </div>
//                 </>
//               :
//                 <>
//                     <Form.Group className='mb-3'>
//                         <Form.Label>{quizes[state.index]}</Form.Label>
//                         <Form.Control onChange={handleChange} value={state.inputCode} as="textarea" rows="10"></Form.Control>
//                     </Form.Group>
//                     <Button onClick={handleSubmit}>제출</Button>

//                 </>
//             }
            
//         </>

//     )
// }
export default Home;