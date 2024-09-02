import GaugeComponent from 'react-gauge-component';

export default function SignUp() {

  return (
<GaugeComponent
  style={{ width: '40%', height: '100px'}} // Example dimensions
  className='ml-10 mt-8'
  type="semicircle"
  arc={{
    width: 0.2,
    padding: 0.005,
    cornerRadius: 1,
    subArcs: [
      {
        limit: -0.2,
        color: '#EA4228',
        showTick: true,
        tooltip: {
          text: 'Negtive!'
        },
        onClick: () => console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"),
        onMouseMove: () => console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB"),
        onMouseLeave: () => console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"),
      },
      {
        limit: 0.2,
        color: '#F5CD19',
        showTick: true,
        tooltip: {
          text: 'Neutral!'
        }
      },
      {
        limit: 1,
        color: '#5BE12C',
        tooltip: {
          text: 'Positive!'
        }
      }
    ]
  }}
  pointer={{
    color: '#345243',
    length: 0.70,
    width: 15,
    elastic: true,
  }}
  labels={{
    valueLabel: { formatTextValue: value => value, fontSize: 10 },
    tickLabels: {
      type: 'outer',
      valueConfig: { formatTextValue: value => value, fontSize: 10 }
    }
  }}
  value={0.42}
  minValue={-1}
  maxValue={1}
/>
  )
}
