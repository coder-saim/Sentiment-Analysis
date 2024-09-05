import GaugeComponent from 'react-gauge-component';

export default function GaugeChart({ score }) {

  return (
    <GaugeComponent
      style={{ width: '110%'}}
      className='mt-6 ml-4'
      type="semicircle"
      arc={{
        width: 0.2,
        padding: 0.005,
        cornerRadius: 1,
        subArcs: [
          {
            limit: -0.1,
            color: '#EA4228',
            showTick: true,
            tooltip: {
              text: 'Negtive!'
            },
          },
          {
            limit: 0.1,
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
      labels={{
        valueLabel: {
          style: {
            fontSize: "50px",
            fill: '#fff',
            backgroundColor: '#000',
          },
          matchColorWithArc: true,
        },
        tickLabels: {
          hideMinMax: false,
          defaultTickValueConfig: {
            style: {
              fill: '#000',
              fontSize: '12px',
              fontWeight: 'bold',
            },
          },
          defaultTickLineConfig: {
            width: 1,
            color: '#000',
            distanceFromArc: 0,
            length: 10,
          },
      }}}
      pointer={{
        color: '#808080',
        length: 0.70,
        width: 15,
        elastic: true,
        type: 'arrow',
      }}
      value={score}
      minValue={-1}
      maxValue={1}
    />
  )
}
