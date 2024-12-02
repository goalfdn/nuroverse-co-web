import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

interface CarouselItem {
  title: string;
  description: string;
}

const CAROUSEL_ITEMS: CarouselItem[] = [
  {
    title: "AI-Powered Therapy Assistant",
    description: "Streamline client interactions with a virtual wellness coordinator that automates check-ins and scheduling. Keep clients engaged with timely therapeutic resources and free your therapists to focus on deeper client needs– while improving overall operational efficiency."
  },
  {
    title: "Personalized Health Coach",
    description: "Complement your current wellness offerings with a virtual wellness coordinator that creates individualized wellness plans. Track client progress and provide ongoing motivational support– enhancing client satisfaction and loyalty, and attracting new clients seeking personalized care."
  },
  {
    title: "Virtual Group Therapy Facilitator",
    description: "Expand accessibility to mental health services with a virtual wellness coordinator that manages online support groups. Facilitate discussions and gather feedback– making your services more engaging and inclusive for clients."
  },
  {
    title: "Wellness Challenge Coordinator",
    description: "Foster community engagement by incorporating a virtual wellness coordinator that organizes and tracks corporate wellness challenges. Encourage participation and accountability– cultivating a healthier workplace culture within your organization."
  },
  {
    title: "Holistic Treatment Advisor",
    description: "Enhance your holistic health services by providing personalized recommendations for complementary therapies with a virtual wellness coordinator. Help clients craft tailored wellness routines– reinforcing your brand as a comprehensive provider of holistic care."
  },
  {
    title: "On-Demand Nutrition Coach",
    description: "Scale your nutrition services with a virtual wellness coordinator that delivers instant meal planning and dietary advice. Meet client needs efficiently– allowing you to enhance service delivery and encourage healthier eating habits."
  },
  {
    title: "Fitness Class AI Instructor",
    description: "Transform your gym's offerings by integrating a virtual wellness coordinator that provides on-demand, tailored fitness classes and routines. Offer members the flexibility to exercise on their terms– maximizing engagement and satisfaction with your services."
  },
  {
    title: "Crisis Management Support Agent",
    description: "Enhance care with a virtual wellness coordinator that provides immediate resources and coping strategies for clients in distress. Offer timely support without overextending your staff– ensuring your clients receive the help they need."
  },
  {
    title: "Sleep Wellness Consultant",
    description: "Innovate your sleep services with a virtual wellness coordinator that analyzes sleep data and offers personalized recommendations. Create new opportunities for client engagement– improving outcomes and expanding your service portfolio."
  },
  {
    title: "Family Health Coordinator",
    description: "Cater to family needs by integrating a virtual wellness coordinator that provides targeted resources and support. Address the unique health concerns of families– fostering a supportive environment for comprehensive care."
  },
  {
    title: "Digital Mental Wellness Hub",
    description: "Centralize mental health resources with a virtual wellness coordinator that connects users to various support services. Facilitate referrals and enhance your support systems– making it easier for clients to access the help they need."
  },
  {
    title: "Work-Life Balance Advisor",
    description: "Strengthen your employee assistance programs with a virtual wellness coordinator that offers personalized tips and resources for achieving work-life balance. Improve employee well-being– enhancing the effectiveness of your programs."
  },
  {
    title: "Youth Engagement Coach",
    description: "Address adolescent mental health needs with a virtual wellness coordinator that delivers targeted resources and coping strategies. Better meet the unique challenges of younger demographics– supporting their mental well-being."
  },
  {
    title: "Chronic Condition Management Agent",
    description: "Enhance patient care by integrating a virtual wellness coordinator that provides ongoing support and tracking for clients with chronic illnesses. Reinforce your commitment to comprehensive care– improving patient engagement and health outcomes."
  },
  {
    title: "Integrative Health Resource Hub",
    description: "Guide users through holistic health options with a virtual wellness coordinator that aggregates various wellness resources. Enhance client experiences by providing easy access to complementary health services– aligning with your existing offerings."
  },
];

export default function InspirationCarousel() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [singlePageWidth, setSinglePageWidth] = useState(0);

  const fullWidth: number = useMemo(
    () => singlePageWidth * CAROUSEL_ITEMS.length,
    [singlePageWidth]
  );

  const currentOffset: number = useMemo(
    () => singlePageWidth * currentIndex,
    [singlePageWidth, currentIndex]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % CAROUSEL_ITEMS.length);
    }, 7000);

    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setSinglePageWidth(rect.width);
    }

    return () => clearInterval(interval);
  }, [currentIndex, wrapperRef.current]);
  
  return (
    <div className='w-full overflow-x-hidden mt-12' ref={wrapperRef}>
      {
        singlePageWidth > 0 &&
        <>
      <div
        className="flex flex-row transform-gpu ease-in duration-300"
        style={{ width: `${fullWidth}px`, transform: `translateX(-${currentOffset}px)`  }}
      >
        {
          CAROUSEL_ITEMS.map((item, index) => (
            <div key={index} className='border-2 border-trusty-200 bg-trusty-100 px-7 pt-12 pb-7 my-3 md:mx-3 rounded-lg' style={{ width: `${singlePageWidth}px` }}>
              <h3 className='text-2xl font-bold text-trusty-300 px-2'>{item.title}</h3>
              <p className='text-xl p-2'>{item.description}</p>
            </div>
          ))
        }
      </div>
      <div className='flex flex-row my-4 justify-center items-center'>
        <div className='text-serenity-shade hover:cursor-pointer px-2' onClick={() => setCurrentIndex(currentIndex > 0 ? (currentIndex - 1) % CAROUSEL_ITEMS.length : CAROUSEL_ITEMS.length - 1)}>{'◀'}</div>
        {
          CAROUSEL_ITEMS.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full mx-1 hover:cursor-pointer ${index === currentIndex ? 'bg-serenity-shade' : 'bg-trusty-400'}`}
            />
          ))
        }
        <div className='text-serenity-shade hover:cursor-pointer px-2' onClick={() => setCurrentIndex((currentIndex + 1) % CAROUSEL_ITEMS.length)}>{'▶'}</div>
      </div>
      </>
}
    </div>
  );
}