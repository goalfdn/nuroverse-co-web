import { useMemo, useState } from "react";

type PricingOption = 'startup' | 'essential' | 'business' | 'enterprise';

interface PricingDetails {
	monthly: number;
	annual: number;
	integrations: string;
	messages: number;
}

type PricingDetailTexts = { [key in keyof PricingDetails]: string };

const ALL_PRICING_DETAILS: { [key in PricingOption]: PricingDetails } = {
  'startup': {
    monthly: 35,
    annual: 348,
    integrations: '1',
    messages: 1000
  },
  'essential': {
    monthly: 119,
    annual: 1188,
    integrations: '2',
    messages: 4000
  },
  'business': {
    monthly: 359,
    annual: 3588,
    integrations: '3–5',
    messages: 10000
  },
  'enterprise': {
    monthly: 0,
    annual: 0,
    integrations: '6+',
    messages: 0
  }
};

function numberWithCommas(x: number) {
  return x.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function PricingSection() {
  const [pricingOption, setPricingOption] = useState<PricingOption>('startup');
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingDetails = useMemo<PricingDetailTexts>((): PricingDetailTexts => {
    const rawDetails = ALL_PRICING_DETAILS[pricingOption];
    return {
      monthly: pricingOption === 'enterprise' ? 'Contact Us' : '$' + (isAnnual ? (rawDetails.annual / 12).toFixed(0) : rawDetails.monthly.toFixed(0)),
      annual: pricingOption === 'enterprise' ? 'Contact Us' : '$' + numberWithCommas(rawDetails.annual),
      integrations: rawDetails.integrations,
      messages: pricingOption === 'enterprise' ? 'Unlimited' : rawDetails.messages.toFixed(0)
    };
  }, [pricingOption, isAnnual]);

  const costSuffix = useMemo<string>((): string => {
    return pricingOption === 'enterprise' ? '' : '/mo';
  }, [pricingOption]);

  return (
    <div className="flex flex-col w-full max-w-2xl mt-14 mx-auto">
      <div className="bg-trusty-400 p-0.5 rounded-full flex flex-row self-center">
        <div className={`hover:cursor-pointer uppercase font-bold px-7 py-1 rounded-full ${isAnnual ? 'bg-serenity text-trusty-500' : 'text-trusty-50'}`} onClick={() => setIsAnnual(true)}>Annual</div>
        <div className={`hover:cursor-pointer uppercase font-bold px-7 py-1 rounded-full ${!isAnnual ? 'bg-serenity text-trusty-500' : 'text-trusty-50'}`} onClick={() => setIsAnnual(false)}>Monthly</div>
      </div>
      <div className="flex flex-row mt-7">
        <label className="text-xl flex flex-1 flex-row justify-between">
          <div>Select number of integrations:</div>
          <select name="integrations" className="ml-3" value={pricingOption} onChange={(e) => setPricingOption(e.target.value as PricingOption)}>
            <option value="startup">1</option>
            <option value="essential">2</option>
            <option value="business">3–5</option>
            <option value="enterprise">6+</option>
          </select>
        </label>
      </div>
      <div className="border-2 border-trusty-200 bg-trusty-100 px-7 py-12 mt-7 rounded-lg">
        <div className="flex flex-row items-center mb-4">
          <div className="h-2 w-2 bg-serenity-shade rounded-full mr-2" />
          <h4 className="text-trusty-500 uppercase">{pricingOption[0].toUpperCase() + pricingOption.slice(1) + ' Plan'}</h4>
        </div>
        <div className="flex flex-row">
          <h2 className="text-6xl font-black text-trusty-400">{pricingDetails.monthly}<span className="text-lg font-light text-trusty-300">{costSuffix}</span></h2>
        </div>
        {
          isAnnual && pricingOption !== 'enterprise' &&
          <p className="mt-1 text-lg font-light text-trusty-300">{pricingDetails.annual + ' billed annually'}</p>
        }
        {
          pricingOption === 'enterprise' &&
          <p className="mt-1 text-lg font-light text-trusty-300">{'for pricing details'}</p>
        }
        <button className="btn-secondary mt-4">Get Started</button>
        <hr className="h-1 my-4 bg-trusty-200" />
        <p className="text-lg uppercase font-bold text-trusty-300 mb-5">Includes:</p>
        <ul>
          <li className="my-2 sm:my-3">{pricingDetails.integrations} integration{pricingDetails.integrations === '1' ? '' : 's'}</li>
          <li className="my-2 sm:my-3">{pricingDetails.messages} messages</li>
        </ul>
        <p className="text-lg uppercase font-bold text-trusty-300 mt-7">Additional messages at <span className="text-trusty-500 font-black">$0.02</span> per message</p>
      </div>
    </div>
  );
}