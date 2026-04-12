import { TrendingUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function PipelineStatistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<{ [key: number]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);
  const [totalKm, setTotalKm] = useState(0);

  const pipelineData = [
    { type: 'BWSC Pipeline', meters: '197,034.15', km: 197.03 },
    { type: 'DI Pipeline', meters: '154,977.57', km: 154.97 },
    { type: 'MS Pipeline', meters: '22,806.32', km: 22.80 },
    { type: 'PCCP Pipeline', meters: '4,914.88', km: 4.91 },
    { type: 'PSC Pipes', meters: '19,696.00', km: 19.69 },
    { type: 'HDPE Pipes', meters: '197,971.53', km: 197.97 },
    { type: 'PVC Pipes', meters: '69,436.00', km: 69.43 },
    { type: 'GI Pipes', meters: '86,454.00', km: 86.45 },
  ];

  const total = 763.25;

  // Animate both total and individual pipelines on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      // Animate total counter
      const totalDuration = 3000; // 3 seconds for total
      const totalSteps = 120;
      const totalIncrement = total / totalSteps;
      let totalStep = 0;

      const totalTimer = setInterval(() => {
        totalStep++;
        const value = Math.min(totalIncrement * totalStep, total);
        setTotalKm(value);

        if (totalStep >= totalSteps) {
          clearInterval(totalTimer);
        }
      }, totalDuration / totalSteps);

      // Animate individual pipeline values
      pipelineData.forEach((pipeline, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = pipeline.km / steps;
        let currentStep = 0;

        const timer = setInterval(() => {
          currentStep++;
          const value = Math.min(increment * currentStep, pipeline.km);
          setAnimatedValues((prev) => ({ ...prev, [index]: value }));

          if (currentStep >= steps) {
            clearInterval(timer);
          }
        }, duration / steps);
      });

      return () => clearInterval(totalTimer);
    }
  }, [isVisible]);

  const getProgressPercentage = (km: number) => {
    return (km / 200) * 100; // Using 200 as max for visual balance
  };

  return (
    <section 
      ref={sectionRef}
      id="statistics" 
      className="py-20 bg-gradient-to-br from-blue-50 to-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl mb-4">Pipeline Infrastructure</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pipeline installation across various diameters and pressure classes
          </p>
        </div>

        {/* Statistics Grid */}
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pipelineData.map((pipeline, index) => {
              const currentValue = animatedValues[index] || 0;
              const progress = getProgressPercentage(currentValue);
              
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
                >
                  <h3 className="text-base mb-3 text-gray-700">{pipeline.type}</h3>
                  <div className="mb-2">
                    <p className="text-3xl text-blue-600 mb-1">
                      {currentValue.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-500">Kilometers</p>
                  </div>
                  
                  {/* Animated Progress Bar */}
                  <div className="mt-4 mb-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-300 ease-out"
                        style={{ 
                          width: `${Math.min(progress, 100)}%`,
                          transition: isVisible ? 'width 2s ease-out' : 'none'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-400 mt-2 pt-2 border-t border-gray-200">
                    {pipeline.meters} meters
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total Summary with Circular Progress */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Animated background circles */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-8 border-white rounded-full"
              style={{
                transform: isVisible 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -50%) scale(0)',
                transition: 'transform 2s ease-out'
              }}
            />
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-8 border-white rounded-full"
              style={{
                transform: isVisible 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -50%) scale(0)',
                transition: 'transform 2s ease-out 0.2s'
              }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-12 h-12 mr-4" />
              <h3 className="text-3xl md:text-4xl">Total Pipeline Laid</h3>
            </div>
            
            <p 
              className="text-6xl md:text-7xl mb-4 font-bold"
              style={{
                transform: isVisible ? 'scale(1)' : 'scale(0.5)',
                opacity: isVisible ? 1 : 0,
                transition: 'all 1s ease-out 0.5s'
              }}
            >
              {totalKm.toFixed(2)} KM
            </p>
            
            {/* Visual representation bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="w-full bg-blue-800 rounded-full h-4 overflow-hidden">
                <div
                  className="h-full bg-white rounded-full"
                  style={{ 
                    width: `${(totalKm / total) * 100}%`,
                    transition: 'width 2.5s ease-out'
                  }}
                />
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              As of now, a cumulative total of {totalKm.toFixed(2)} kilometers of pipeline has been laid, comprising various diameters and pressure classes.
            </p>
            <div className="mt-8 pt-6 border-t border-blue-400">
              <p className="text-lg text-blue-100">
                All diameters • All pressure classes • Pan-India execution
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            Demonstrating extensive experience in large-scale water infrastructure development
          </p>
        </div>
      </div>
    </section>
  );
}