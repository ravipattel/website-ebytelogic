import Image from 'next/image';

import React from 'react';

import GstreamerJpg from '@/src/assets/images/blogs/blogDetails/g-streamer.jpg'
import { FaMicrochip } from 'react-icons/fa';

const heroData = {
  "section": {
    "background": {
      "overlay": true
    },
    "heroGrid": {
      "container": {
        "padding": "px-8 py-16",
        "height": "h-full"
      },
      "content": {
        "title": {
          "text": "Delivering RealTime Multimedia on Embedded Hardware",
          "emphasis": "RealTime Multimedia",
          "emphasisColor": "text-blue-600",
          "class": "font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        },
        "description": {
          "text": "Master the art of GStreamer optimization for ARM platforms: from latency reduction and buffer management to hardware-accelerated performance tuning.",
          "class": "text-base text-gray-600 leading-relaxed"
        },
        "badgeList": [
          {
            "text": "RK356x",
            "icon": "fab fa-linux",
          },
          {
            "text": "i.MX8",
            "icon": "fas fa-microchip",
          },
          {
            "text": "TI Sitara",
            "icon": "fas fa-cog",
          }
        ]
      }
    },
    "visualElement": {
      "image": {
        "src": GstreamerJpg,
        "alt": "Embedded ARM processor chip",
        "class": "w-full h-full object-cover rounded-2xl shadow-2xl opacity-90"
      },
      "overlay": {
        "gradientFrom": "black/50",
        "gradientTo": "transparent",
      }
    },
    "keyMetrics": {
      "container": {
        "padding": "px-8",
      },
      "grid": {
        "columns": 1,
        "mdColumns": 4,
        "gap": 6
      },
      "metrics": [
        {
          "value": "300ms",
          "label": "Target Latency",
        },
        {
          "value": "±150ms",
          "label": "AV Sync Tolerance",
        },
        {
          "value": "Zero",
          "label": "Copy Goal",
        },
        {
          "value": "RT",
          "label": "Kernel Priority",
        }
      ]
    }
  }
};

const GstreamerHero = () => {
  return (
    <section className={`relative bg-primary/10 overflow-hidden`}>
      <div className="relative z-10 sm:px-4 px-6 py-16 h-full">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-6">
            <div className="flex gap-2 items-center w-fit px-4 py-2 bg-primary backdrop-blur-sm rounded-full text-white text-sm font-medium">
              <FaMicrochip /> Embedded Systems Engineering
            </div>
            <h1 className={`${heroData.section.heroGrid.content.title.class}`}>
              Delivering <em className={heroData.section.heroGrid.content.title.emphasisColor}>{heroData.section.heroGrid.content.title.emphasis}</em> on Embedded Hardware
            </h1>
            <p className={heroData.section.heroGrid.content.description.class}>
              {heroData.section.heroGrid.content.description.text}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mb-6">
            {heroData.section.heroGrid.content.badgeList.map((badge, index) => (
              <span key={index} className="px-4 py-2 bg-white backdrop-blur-sm rounded-lg text-sm">
                <i className={`${badge.icon} mr-2`}></i>{badge.text}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full h-64 md:h-96">
            <Image src={heroData.section.visualElement.image.src} alt={heroData.section.visualElement.image.alt} className={heroData.section.visualElement.image.class} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
          </div>
        </div>
        <div className="mt-6">
          <div className={`grid grid-cols-1 md:grid-cols-${heroData.section.keyMetrics.grid.mdColumns} gap-${heroData.section.keyMetrics.grid.gap}`}>
            {heroData.section.keyMetrics.metrics.map((metric, index) => (
              <div key={index} className="bg-white backdrop-blur-sm rounded-xl p-4 text-center">
                <div className={`text-2xl font-bold text-primary`}>{metric.value}</div>
                <div className="text-sm">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GstreamerHero;
