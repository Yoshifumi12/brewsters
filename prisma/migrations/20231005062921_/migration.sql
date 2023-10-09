/*
  Warnings:

  - You are about to drop the column `email` on the `Suppliers` table. All the data in the column will be lost.
  - You are about to drop the column `supplierLocation` on the `Suppliers` table. All the data in the column will be lost.
  - Added the required column `supplierAddress` to the `Suppliers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `supplierEmail` to the `Suppliers` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Suppliers" (
    "supplierId" TEXT NOT NULL PRIMARY KEY,
    "supplierName" TEXT NOT NULL,
    "supplierEmail" TEXT NOT NULL,
    "supplierAddress" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_Suppliers" ("createdAt", "supplierId", "supplierName", "updatedAt", "userId") SELECT "createdAt", "supplierId", "supplierName", "updatedAt", "userId" FROM "Suppliers";
DROP TABLE "Suppliers";
ALTER TABLE "new_Suppliers" RENAME TO "Suppliers";
CREATE INDEX "Suppliers_userId_idx" ON "Suppliers"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
