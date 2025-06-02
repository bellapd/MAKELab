"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import visitingAcademics from "@/data/visiting_academics.json" assert { type: "json" };
import invitedTalks from "@/data/invited_talks.json" assert { type: "json" };
import conferenceRoles from "@/data/conference_roles.json" assert { type: "json" };
import programCommittees from "@/data/program_committees.json" assert { type: "json" };
import awards from "@/data/awards.json" assert { type: "json" };
import patents from "@/data/patents.json" assert { type: "json" };

export default function About() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Read hash from URL on page load
    const hash = window.location.hash?.substring(1)
    if (hash) {
      setOpenAccordion(hash)
    }
  }, [])

  const renderVisitingTable = () => (
    <Card className="shadow-sm border border-gray-200 mt-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead>ID</TableHead>
              <TableHead>University</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {visitingAcademics.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.university}</TableCell>
                <TableCell>{item.department}</TableCell>
                <TableCell>{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )

  const renderTalksTable = () => (
    <Card className="shadow-sm border border-gray-200 mt-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead>ID</TableHead>
              <TableHead>Talk</TableHead>
              <TableHead>Location</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invitedTalks.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.talks}</TableCell>
                <TableCell>{item.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )

  const renderConferenceRoles = () => (
    <>
      <h3 className="text-xl font-semibold mt-6 mb-2">A. Conference Organizing Chair/Member</h3>
      <Card className="shadow-sm border border-gray-200 mt-4">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead>ID</TableHead>
                <TableHead>Position</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Year</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {conferenceRoles.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50">
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.position}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell>{item.year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )

  const renderProgramCommittees = () => (
    <>
      <h3 className="text-xl font-semibold mt-6 mb-2">Program Committee Member</h3>
      <Card className="shadow-sm border border-gray-200 mt-4">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-gray-50 hover:bg-gray-50">
                <TableHead>ID</TableHead>
                <TableHead>Conference</TableHead>
                <TableHead>Years</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {programCommittees.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50">
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.conference}</TableCell>
                  <TableCell>{item.years.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  )

  const renderAwardsTable = () => (
    <Card className="shadow-sm border border-gray-200 mt-6">
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50 hover:bg-gray-50">
              <TableHead>ID</TableHead>
              <TableHead>Award</TableHead>
              <TableHead>Conference</TableHead>
              <TableHead>Year</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {awards.map((item) => (
              <TableRow key={item.id} className="hover:bg-gray-50">
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.award}</TableCell>
                <TableCell>{item.conference}</TableCell>
                <TableCell>{item.year}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )

  const renderPatentsList = () => (
    <ul className="list-disc ml-6 space-y-2 mt-6">
      {patents.map((item) => (
        <li key={item.id} className="text-gray-800">
          <p className="font-semibold">{item.title}</p>
          <p>
            {item.patent_numbers.join("; ")} {item.dates.filter(date => date).join("; ")}
          </p>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-blue-500 bg-clip-text text-transparent">
            About Professor Arbee Chen
          </h1>
        </div>
        <Accordion
          type="single"
          collapsible
          value={openAccordion ?? undefined}
          onValueChange={setOpenAccordion}
          className="w-full max-w-6xl mx-auto space-y-4"
        >
        <AccordionItem value="visiting-academics">
          <AccordionTrigger id="visiting-academics" className="text-2xl font-medium">Visiting Academics</AccordionTrigger>
          <AccordionContent className="text-2xl">
            {renderVisitingTable()}
          </AccordionContent>
        </AccordionItem>

        {/* <AccordionItem value="invited-talks">
          <AccordionTrigger id="invited-talks" className="text-2xl font-medium">Invited Talks, Panels, and Tutorials</AccordionTrigger>
          <AccordionContent className="text-xl">
            {renderTalksTable()}
          </AccordionContent>
        </AccordionItem> */}
      </Accordion>

      <Accordion
        type="single"
        collapsible
        value={openAccordion ?? undefined}
        onValueChange={setOpenAccordion}
        className="w-full max-w-6xl mx-auto space-y-4"
      >
        <AccordionItem value="program-comitee">
          <AccordionTrigger id="program-comitee" className="text-2xl font-medium">Conference Organization</AccordionTrigger>
          <AccordionContent className="text-xl">
            {renderProgramCommittees()}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        value={openAccordion ?? undefined}
        onValueChange={setOpenAccordion}
        className="w-full max-w-6xl mx-auto space-y-4"
      >
        <AccordionItem value="awards">
          <AccordionTrigger id="awards"className="text-2xl font-medium">Awards</AccordionTrigger>
          <AccordionContent className="text-xl">
            {renderAwardsTable()}
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        type="single"
        collapsible
        value={openAccordion ?? undefined}
        onValueChange={setOpenAccordion}
        className="w-full max-w-6xl mx-auto space-y-4"
      > 
        <AccordionItem value="patents">
          <AccordionTrigger id="patents" className="text-2xl font-medium">Patents</AccordionTrigger>
          <AccordionContent className="text-xl">
            {renderPatentsList()}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
