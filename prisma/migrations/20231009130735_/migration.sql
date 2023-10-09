/*
  Warnings:

  - You are about to drop the column `token` on the `LoginToken` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LoginToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL
);
INSERT INTO "new_LoginToken" ("createdAt", "id", "updatedAt", "userId") SELECT "createdAt", "id", "updatedAt", "userId" FROM "LoginToken";
DROP TABLE "LoginToken";
ALTER TABLE "new_LoginToken" RENAME TO "LoginToken";
CREATE INDEX "LoginToken_userId_idx" ON "LoginToken"("userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE INDEX "Session_userId_idx" ON "Session"("userId");
