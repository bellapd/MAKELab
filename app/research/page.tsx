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
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 pt-40 pb-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-black">
            Publications
          </h1>
          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the full list of publications from Professor Arbee L.P. Chen
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full sm:w-1/2 md:w-1/3 max-w-sm">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              placeholder="Search citations..."
              className="pl-10 h-10 text-sm"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                className={`cursor-pointer text-sm px-3 py-1.5 rounded-md ${
                  selectedCategory === category
                    ? "bg-orange-500 hover:bg-orange-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                }`}
                onClick={() => {
                  setSelectedCategory(category);
                  setCurrentPage(1);
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
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50">
                    <TableHead
                      className="min-w-[50px] py-2 cursor-pointer"
                      onClick={() => handleSort("id")}
                    >
                      ID{" "}
                      {sortConfig.key === "id" &&
                        (sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        ))}
                    </TableHead>
                    <TableHead
                      className="min-w-[300px] py-2 cursor-pointer"
                      onClick={() => handleSort("cite")}
                    >
                      Citation{" "}
                      {sortConfig.key === "cite" &&
                        (sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        ))}
                    </TableHead>
                    <TableHead
                      className="min-w-[80px] py-2 cursor-pointer"
                      onClick={() => handleSort("year")}
                    >
                      Year{" "}
                      {sortConfig.key === "year" &&
                        (sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        ))}
                    </TableHead>
                    <TableHead
                      className="min-w-[200px] py-2 cursor-pointer"
                      onClick={() => handleSort("type")}
                    >
                      Type{" "}
                      {sortConfig.key === "type" &&
                        (sortConfig.direction === "asc" ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        ))}
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentPageData.length > 0 ? (
                    currentPageData.map((pub) => (
                      <TableRow key={pub.id}>
                        <TableCell className="py-2 font-medium">
                          {pub.id}
                        </TableCell>
                        <TableCell className="py-2 whitespace-normal text-sm">
                          {pub.cite}
                        </TableCell>
                        <TableCell className="py-2 text-sm">
                          {pub.year ?? "N/A"}
                        </TableCell>
                        <TableCell className="py-2">
                          <Badge
                            className={`text-xs px-2.5 py-1 rounded ${
                              pub.type === "Journal Papers"
                                ? "bg-blue-100 text-blue-800"
                                : pub.type ===
                                  "Invited Articles, Book Chapters, and Edited Books"
                                ? "bg-green-100 text-green-800"
                                : pub.type === "Conference Papers"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
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
            </div>
          </CardContent>
        </Card>

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
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

        {/* Patents Section */}
        <div className="mt-20 pt-16 border-t border-gray-200 pb-30">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Patents
          </h3>
          <div className="w-full max-w-6xl mx-auto">{renderPatentsList()}</div>
        </div>
      </div>
    </div>
  );
}
