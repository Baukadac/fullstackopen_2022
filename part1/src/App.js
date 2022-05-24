const Header = (props) => {
    return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
    return (
    <div>
      <Part part = {props.part1} exes = {props.exes1}/>
      <Part part = {props.part2} exes = {props.exes2}/>
      <Part part = {props.part3} exes = {props.exes3}/>
    </div>
  )
}

const Total = (props) => {
  return (
  <div>
    <p>Number of exercieses {props.exes1+props.exes2+props.exes3}</p>
     </div>
)
}

const Part = (props) => {
  return (
  <div>
    <p>{props.part} {props.exes}</p>
  </div>
)
}

const App = () => {
  const course = "Half Stack application development"
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  return (
  <div>
    <Header course = {course}/>
    <p>
      <Content part1={part1} exes1 = {exercises1} 
        part2={part2} exes2 = {exercises2}
        part3={part3} exes3 = {exercises3}  
      />
    </p>
    
    <Total exes1 = {exercises1} exes2 = {exercises2} exes3 = {exercises3  }/>
  </div>
  )
  }

export default App