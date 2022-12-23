import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Card } from './Card';

function App() {
  const priceCards = [
    {
      plan: "free",
      price: "0",
      features: [
        {
          title: "single user",
          isEnable: true
        },
        {
          title: "5GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: false
        },
        {
          title: "Dedicated Phone Support",
          isEnable: false
        },
        {
          title: "Free Subdomain",
          isEnable: false
        },
        {
          title: "Monthly Status Reports",
          isEnable: false
        }
      ]
    },
    {
      plan: "plus",
      price: "9",
      features: [
        {
          title: "5 user",
          isEnable: true,
          isBold: true
        },
        {
          title: "50GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true
        },
        {
          title: "Free Subdomain",
          isEnable: true
        },
        {
          title: "Monthly Status Reports",
          isEnable: false
        },
      ]
    },
    {
      plan: "pro",
      price: "49",
      features: [
        {
          title: "Unlimited user",
          isEnable: true,
          isBold: true
        },
        {
          title: "150GB Storage",
          isEnable: true
        },
        {
          title: "Unlimited Public Projects",
          isEnable: true
        },
        {
          title: "Community Access",
          isEnable: true
        },
        {
          title: "Unlimited Private Projects",
          isEnable: true
        },
        {
          title: "Dedicated Phone Support",
          isEnable: true
        },
        {
          title: "Unlimited Free Subdomain",
          isEnable: true
        },
        {
          title: "Monthly Status Reports",
          isEnable: true
        },
      ]
    }
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">

          {/* to loop the priceCards using map */}

          {priceCards.map((card) => {
            return <Card card={card} />
          })}

        </div>
      </div>
    </section>
  );
}

export default App;
