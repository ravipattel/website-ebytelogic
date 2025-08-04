import React from 'react'
import Sidebar from '../../../components/Sidebar'
import ArmHero from './ArmHero'
import ArmExecutive from './ArmExecutive'
import ArmIntro from './ArmIntro'
import ArmTarget from './ArmTarget'
import ArmTechnical from './ArmTechnical'
import ArmPerformance from './ArmPerformance'
import ArmComparative from './ArmComparative'
import ArmConclusion from './ArmConclusion'

const Arm = () => {
    return (
          <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className="overflow-y-auto">
                <ArmHero />
                <ArmExecutive />
                <ArmIntro />
                <ArmTarget />
                <ArmTechnical />
                <ArmPerformance />
                <ArmComparative />
                <ArmConclusion />
            </div>
        </div>
    )
}

export default Arm
