"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import publicationList from "@/data/publication_list.json";
import patents from "@/data/patents.json" assert { type: "json" };

type Publication = {
  id: number;
  cite: string;
  year: number | null;
  type:
    | "Journal Papers"
    | "Invited Articles, Book Chapters, and Edited Books"
    | "Conference Papers"
    | string;
};

type SortKey = "id" | "cite" | "year" | "type";
type SortDirection = "asc" | "desc";

const PAGE_SIZE = 6;

export default function PublicationListPage() {
  const [publications] = useState<Publication[]>(publicationList);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortConfig, setSortConfig] = useState<{
    key: SortKey;
    direction: SortDirection;
  }>({
    key: "year",
    direction: "desc",
  });
  const [currentPage, setCurrentPage] = useState(1);

  const categories = [
    "All",
    "Journal Papers",
    "Invited Articles, Book Chapters, and Edited Books",
    "Conference Papers",
  ];

  const handleSort = (key: SortKey) => {
    let direction: SortDirection = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredSorted = publications
    .filter((pub) => {
      const matchesSearch = pub.cite
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || pub.type === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const key = sortConfig.key;
      if (a[key] === null || a[key] === undefined) return 1;
      if (b[key] === null || b[key] === undefined) return -1;

      if (typeof a[key] === "string" && typeof b[key] === "string") {
        if (a[key] < b[key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      }

      if (typeof a[key] === "number" && typeof b[key] === "number") {
        if (a[key] < b[key]) return sortConfig.direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      }

      return 0;
    });

  const pageCount = Math.ceil(filteredSorted.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentPageData = filteredSorted.slice(
    startIndex,
    startIndex + PAGE_SIZE
  );

  const goPrevious = () => setCurrentPage((p) => Math.max(1, p - 1));
  const goNext = () => setCurrentPage((p) => Math.min(pageCount, p + 1));

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
    <div className="min-h-screen bg-white mx-auto px-6 py-26 pt-52">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-8 text-black">
            Publications
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the full list of publications from Professor Arbee L.P. Chen
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative w-full md:w-1/3">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search citations..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // reset page on search
              }}
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Badge
                key={category}
                className={`cursor-pointer px-3 py-1 ${
                  selectedCategory === category
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1); // reset page on filter change
                }}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Publications Table */}
        <Card className="shadow-sm border border-gray-200">
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="bg-gray-50 hover:bg-gray-50">
                  <TableHead
                    className="w-[60px]"
                    onClick={() => handleSort("id")}
                  >
                    ID
                    {sortConfig.key === "id" && (
                      <span className="ml-1">
                        {sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </TableHead>
                  <TableHead onClick={() => handleSort("cite")}>
                    Citation
                    {sortConfig.key === "cite" && (
                      <span className="ml-1">
                        {sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="w-[100px]"
                    onClick={() => handleSort("year")}
                  >
                    Year
                    {sortConfig.key === "year" && (
                      <span className="ml-1">
                        {sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </TableHead>
                  <TableHead
                    className="w-[250px]"
                    onClick={() => handleSort("type")}
                  >
                    Type
                    {sortConfig.key === "type" && (
                      <span className="ml-1">
                        {sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
                      </span>
                    )}
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentPageData.length > 0 ? (
                  currentPageData.map((pub) => (
                    <TableRow key={pub.id}>
                      <TableCell className="font-medium">{pub.id}</TableCell>
                      <TableCell className="whitespace-normal">
                        {pub.cite}
                      </TableCell>
                      <TableCell>{pub.year ?? "N/A"}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            pub.type === "Journal Papers"
                              ? "bg-blue-100 text-blue-800"
                              : pub.type ===
                                "Invited Articles, Book Chapters, and Edited Books"
                              ? "bg-green-100 text-green-800"
                              : pub.type === "Conference Papers"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-gray-100 text-gray-800"
                          }
                        >
                          {pub.type}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={4}
                      className="text-center py-8 text-gray-500"
                    >
                      No publications found matching your criteria
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Pagination Controls */}
        <div className="flex justify-between items-center mt-6">
          <Button
            variant="outline"
            disabled={currentPage === 1}
            onClick={goPrevious}
          >
            Previous
          </Button>
          <div className="text-sm text-gray-600">
            Page {currentPage} of {pageCount}
          </div>
          <Button
            variant="outline"
            disabled={currentPage === pageCount}
            onClick={goNext}
          >
            Next
          </Button>
        </div>

        <div className="mt-20 pt-16 border-t border-gray-200">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Patents </h3>
            <div className="w-full max-w-6xl mx-auto">
              {renderPatentsList()}
            </div>
        </div>
      </div>
    </div>
  );
}
