import GaugeComponent from 'react-gauge-component';

export default function GaugeChart() {

  return (
    <GaugeComponent
      style={{ width: '120%'}} // Example dimensions
      className='ml-10 mt-4'
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
      value={0.00}
      minValue={-1}
      maxValue={1}
    />
  )
}
