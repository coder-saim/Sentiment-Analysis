import GaugeComponent from 'react-gauge-component';

export default function GaugeChart({ score }) {

  return (
    <GaugeComponent
      style={{ width: '100%'}}
      className='mt-6 ml-12'
      type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        subArcs: [
          {
            limit: -0.2,
            color: '#EA4228',
            showTick: false,
            tooltip: {
              text: 'Negtive!'
            },
          },
          {
            limit: 0.2,
            color: '#F5CD19',
            showTick: false,
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
      labels={{
        valueLabel: {
          style: {
            fontSize: "40px",
            fill: '#345243',
          },
        },
        tickLabels: {
          hideMinMax: true,
        },
      }}
      pointer={{
        color: '#fff',
        length: 0.70,
        width: 15,
        elastic: true,
      }}
      value={score}
      minValue={-1}
      maxValue={1}
    />
  )
}
