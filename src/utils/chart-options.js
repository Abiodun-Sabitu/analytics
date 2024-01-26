export const options = (colorMode) => {
  const gridColor = colorMode === "dark" ? "#4B5563" : "#EAEAEA";
  return  {
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
        color: gridColor,
        borderDash: [5, 5],
      },
      beginAtZero: true, 
    },
  },
  transitions: {
    show: {
      animations: {
        x: {
          from: 0
        },
        y: {
          from: (ctx) => {
            if (ctx.type === 'data') {
              if (ctx.mode === 'default' && !ctx.dropped) {
                ctx.dropped = true;
                return 0;
              }
            }
          }
        }
      }
    }
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
   
    event.native.target.style.cursor = chartElement[0] ? 'pointer' : 'default';
  }
};



}

const WEEKLY_DATA = [5000, 20000, 3000, 28000, 8000, 45000, 8000, 23000, 33000, 40000, 30000, 22000]
const MONTHLY_DATA =[5000, 20000, 3000, 28000, 8000, 45000, 8000, 23000, 33000, 40000, 30000, 22000]
const BI_MONTHLY = [5000, 20000, 3000, 28000, 8000, 45000, 8000, 23000, 33000, 40000, 30000, 22000]

export {
  WEEKLY_DATA, MONTHLY_DATA, BI_MONTHLY
}