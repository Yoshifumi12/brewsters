-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_LoginToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sequenceId" TEXT NOT NULL DEFAULT '0',
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
