import GaugeComponent from 'react-gauge-component';
import { useTheme } from '../contexts/ThemeContext';

export default function GaugeChart({ score }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="w-full flex justify-center">
      <GaugeComponent
        style={{ width: '100%', maxWidth: '400px' }}
        className='mt-4 md:mt-6'
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
                text: 'Negative!'
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
              fontSize: "40px",
              fill: isDark ? '#fff' : '#374151',
              backgroundColor: 'transparent',
            },
            matchColorWithArc: true,
          },
          tickLabels: {
            hideMinMax: false,
            defaultTickValueConfig: {
              style: {
                fill: isDark ? '#d1d5db' : '#374151',
                fontSize: '10px',
                fontWeight: 'bold',
              },
            },
            defaultTickLineConfig: {
              width: 1,
              color: isDark ? '#6b7280' : '#374151',
              distanceFromArc: 0,
              length: 8,
            },
        }}}
        pointer={{
          color: '#808080',
          length: 0.70,
          width: 12,
          elastic: true,
          type: 'arrow',
        }}
        value={score}
        minValue={-1}
        maxValue={1}
      />
    </div>
  )
}
