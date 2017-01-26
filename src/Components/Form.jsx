const Form = ({addStory}) => {

  // input tracker
  let input

  return (
    <div>
      <input ref={node => {
        input = node
      }} />

      <button onClick={() => {
        addStory(input.value)
      }}>
      +
      </button>
    </div>
  )
}
