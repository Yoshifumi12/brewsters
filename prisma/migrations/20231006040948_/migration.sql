-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "productId" TEXT NOT NULL PRIMARY KEY,
    "productName" TEXT NOT NULL,
    "productStock" INTEGER NOT NULL DEFAULT 0,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "supplierName" TEXT NOT NULL
);
INSERT INTO "new_Products" ("createdAt", "productId", "productName", "productStock", "supplierName", "updatedAt", "userId") SELECT "createdAt", "productId", "productName", "productStock", "supplierName", "updatedAt", "userId" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE INDEX "Products_userId_idx" ON "Products"("userId");
CREATE INDEX "Products_supplierName_idx" ON "Products"("supplierName");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
