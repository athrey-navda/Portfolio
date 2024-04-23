"use client";
import { useState, useEffect } from "react";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BreadCrumbs({ items }) {
  const pathname = usePathname();
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split("/");
      const currentPageKey = pathSegments.pop() || "home";
      setCurrentPage(currentPageKey);
    }
  }, [pathname]);

  const handlePageChange = (key) => {
    setCurrentPage(key);
  };

  return (
    <div className="mt-12">
      <Breadcrumbs underline="active" onAction={handlePageChange}>
        {items.map((item) => {
          if (
            currentPage === "snake-and-ladder" &&
            item.key === "tic-tac-toe"
          ) {
            return null;
          }
          if (
            currentPage === "tic-tac-toe" &&
            item.key === "snake-and-ladder"
          ) {
            return null;
          }
          return (
            <BreadcrumbItem
              key={item.key}
              isCurrent={currentPage === item.key}
              className={currentPage === item.key ? "font-bold" : ""}
            >
              <Link href={item.href}>{item.label}</Link>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
