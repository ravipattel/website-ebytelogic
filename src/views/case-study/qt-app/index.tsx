import React from 'react'
import Sidebar from '../../../components/Sidebar'
import QtAppHero from './QtAppHero'
import QtAppIntro from './QtAppIntro'
import QtAppBoot from './QtAppBoot'
import QtAppUBoot from './QtAppUBoot'
import QtAppKernel from './QtAppKernel'
import QtAppUser from './QtAppUser'
import QtOptimization from './QtOptimization'
import QtAppHardware from './QtAppHardware'
import QtAppCase from './QtAppCase'
import QtAppPorting from './QtAppPorting'
import QtAppConclusion from './QtAppConclusion'

const QtApp = () => {
    return (
           <div className="lg:flex">
            <div className="w-72 h-fit lg:sticky lg:top-[98px]">
                <Sidebar />
            </div>
            <div className="overflow-y-auto">
                <QtAppHero />
                <QtAppIntro />
                <QtAppBoot />
                <QtAppUBoot />
                <QtAppKernel />
                <QtAppUser />
                <QtOptimization />
                <QtAppHardware />
                <QtAppCase />
                <QtAppPorting />
                <QtAppConclusion />
            </div>
        </div>
    )
}

export default QtApp
