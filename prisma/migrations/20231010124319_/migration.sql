/*
  Warnings:

  - A unique constraint covering the columns `[productName]` on the table `Products` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[supplierName]` on the table `Suppliers` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[supplierEmail]` on the table `Suppliers` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Products_productName_key" ON "Products"("productName");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_supplierName_key" ON "Suppliers"("supplierName");

-- CreateIndex
CREATE UNIQUE INDEX "Suppliers_supplierEmail_key" ON "Suppliers"("supplierEmail");
