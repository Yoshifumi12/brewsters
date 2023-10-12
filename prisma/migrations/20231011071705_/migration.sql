/*
  Warnings:

  - Added the required column `userName` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "productName" TEXT NOT NULL,
    "productStock" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "userName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "supplierName" TEXT NOT NULL,
    "supplierId" TEXT NOT NULL
);
INSERT INTO "new_Products" ("createdAt", "productId", "productName", "productStock", "supplierId", "supplierName", "updatedAt", "userId") SELECT "createdAt", "productId", "productName", "productStock", "supplierId", "supplierName", "updatedAt", "userId" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE UNIQUE INDEX "Products_productName_key" ON "Products"("productName");
CREATE INDEX "Products_userId_idx" ON "Products"("userId");
CREATE INDEX "Products_supplierId_idx" ON "Products"("supplierId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
