/*
  Warnings:

  - Added the required column `userName` to the `Suppliers` table without a default value. This is not possible if the table is not empty.

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
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL
);
INSERT INTO "new_Suppliers" ("createdAt", "supplierAddress", "supplierEmail", "supplierId", "supplierName", "updatedAt", "userId") SELECT "createdAt", "supplierAddress", "supplierEmail", "supplierId", "supplierName", "updatedAt", "userId" FROM "Suppliers";
DROP TABLE "Suppliers";
ALTER TABLE "new_Suppliers" RENAME TO "Suppliers";
CREATE UNIQUE INDEX "Suppliers_supplierName_key" ON "Suppliers"("supplierName");
CREATE UNIQUE INDEX "Suppliers_supplierEmail_key" ON "Suppliers"("supplierEmail");
CREATE INDEX "Suppliers_userId_idx" ON "Suppliers"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
