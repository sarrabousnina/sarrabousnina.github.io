"use client"

import { motion } from "framer-motion"
import { Calendar, ExternalLink, Users, Heart } from "lucide-react"
import { useLanguageStore } from "@/stores/language-store"

export default function CommunitySection() {
  const { t, locale } = useLanguageStore()

  const safeT = (section: string, key: string, fallback: string | string[]) => {
    try {
      const result = t(section, key)
      return result !== undefined ? result : fallback
    } catch (error) {
      return fallback
    }
  }

  const getCommunityData = () => {
    return [
      {
        role: safeT('community', 'deepflowMentor.role', 'Mentor'),
        organization: "DeepFlow – AI Club",
        dates: "09/2024–present",
        impact: safeT('community', 'deepflowMentor.impact', [
          "Coached ML/AI projects for club members",
          "Provided technical guidance through hands-on workshops",
          "Helped organize hackathon events"
        ]),
        link: null,
        icon: Users,
      },
      {
        role: safeT('community', 'deepflowMember.role', 'Member'),
        organization: "DeepFlow – AI Club",
        dates: "09/2023–06/2024",
        impact: safeT('community', 'deepflowMember.impact', [
          "Attended technical AI/ML workshops",
          "Contributed to student community initiatives"
        ]),
        link: null,
        icon: Users,
      },
      {
        role: safeT('community', 'ieeeMember.role', 'Member'),
        organization: "IEEE Student Branch",
        dates: "09/2023–06/2024",
        impact: safeT('community', 'ieeeMember.impact', [
          "Participated in 24-hour coding event Xtreme",
          "Attended technical workshops"
        ]),
        link: null,
        icon: Users,
      },
      {
        role: safeT('community', 'hackflowVolunteer.role', 'Volunteer'),
        organization: "Event Logistics HackFlow",
        dates: "2023–2024",
        impact: safeT('community', 'hackflowVolunteer.impact', [
          "Planning & logistics support for the hackathon event",
          "Coordinated with multiple stakeholders",
          "Ensured smooth execution of integration activities"
        ]),
        link: null,
        icon: Heart,
      },
      {
        role: safeT('community', 'engineeringRoadVolunteer.role', 'Volunteer'),
        organization: "Event Logistics Engineering Road",
        dates: "2022–2023",
        impact: safeT('community', 'engineeringRoadVolunteer.impact', [
          "Planning & logistics support for biggest event of the year in IPEIN",
          "Coordinated with multiple stakeholders",
          "Ensured smooth execution of integration activities"
        ]),
        link: null,
        icon: Heart,
      },
      {
        role: safeT('community', 'robopeinMember.role', 'Member'),
        organization: "Robo'PEIN",
        dates: "09/2021–06/2022",
        impact: safeT('community', 'robopeinMember.impact', [
          "Collaborated on technical robot workshops",
          "Contributed to student community initiatives"
        ]),
        link: null,
        icon: Users,
      },
      {
        role: safeT('community', 'integrationDayVolunteer.role', 'Volunteer'),
        organization: "Event Logistics Integration Day at IPEIN",
        dates: "2022–2023",
        impact: safeT('community', 'integrationDayVolunteer.impact', [
          "Planning & logistics support for engineering event",
          "Ensured smooth execution of integration activities"
        ]),
        link: null,
        icon: Heart,
      }
    ]
  }

  const communityData = getCommunityData()

  return (
    <section id="community" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 fade-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            {safeT('community', 'title', 'Community')} &
            <span className="relative ml-3">
              {safeT('community', 'volunteering', 'Volunteering')}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-stone-600 dark:text-stone-300 max-w-3xl mx-auto">
            {safeT('community', 'subtitle', 'Contributing to the tech community through mentorship, collaboration, and volunteer work')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communityData.map((item: any, index: number) => {
            const IconComponent = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group relative bg-white/70 dark:bg-stone-900/60 backdrop-blur border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] hover:ring-1 hover:ring-emerald-400/20 fade-up-delay-${index + 1}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl text-white shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold font-heading text-stone-900 dark:text-stone-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-stone-700 dark:text-stone-300 font-medium">{safeT('community', 'organization', 'Organization')}: {item.organization}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4 text-stone-600 dark:text-stone-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.dates}</span>
                </div>

                <div className="space-y-2 mb-4">
                  {(Array.isArray(item.impact) ? item.impact : [item.impact]).filter(Boolean).map((point: string, pointIndex: number) => (
                    <div key={pointIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors text-sm font-medium"
                  >
                    {safeT('community', 'learnMore', 'Learn more')}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}