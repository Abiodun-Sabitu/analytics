export const options = {
   responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: true,
        titleFont: {
        family: "Plus Jakarta Sans Variable"
        }, 
        bodyFont: {
            family: "Plus Jakarta Sans Variable"
        }
      }
    
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        font: {
          family: 'Plus Jakarta Sans Variable', 
        },
      },
    },
    y: {
      ticks: {
        font: {
          family: 'Plus Jakarta Sans Variable', 
        },
      },
      grid: {
        color: '#EAEAEA',
        borderDash: [5, 5],
      },
      beginAtZero: true, 
    },
  },
  animations: {
    y: {
      easing: 'easeInOutElastic', 
      from: (context) => {
        if (context.type === 'data') {
          if (context.mode === 'default' && !context.dropped) {
            context.dropped = true;
            return 0;
          }
        }
      }
    }
  },
  hover: {
    animationDuration: 300, 
  },
  onHover: (event, chartElement) => {
    // You can use Framer Motion or simply adjust the chart styles here
    // For instance, to change the cursor to a pointer when hovering over a bar
    event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
  }
};
