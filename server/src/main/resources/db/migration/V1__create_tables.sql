-- V1__create_tables.sql

-- Enable the uuid-ossp extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Creating table for Building
CREATE TABLE Building (
                          Id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          Title VARCHAR(255) NOT NULL,
                          Editable BOOLEAN DEFAULT TRUE,
                          OwnerId UUID,
                          resourceURL VARCHAR(255),
                          ModifiedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          ModifiedBy UUID,
                          CreatedBy UUID,
                          CreatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          IsDeleted BOOLEAN DEFAULT FALSE
);

-- Creating table for User
CREATE TABLE "User" (
                        Id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                        Name VARCHAR(255) NOT NULL,
                        Email VARCHAR(255) UNIQUE NOT NULL,
                        Avatar VARCHAR(255),
                        Role UUID,
                        ModifiedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        ModifiedBy UUID,
                        CreatedBy UUID,
                        CreatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                        IsDeleted BOOLEAN DEFAULT FALSE
);

-- Creating table for Role
CREATE TABLE Role (
                      Id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                      Type VARCHAR(50) NOT NULL
);

-- Creating table for Material
CREATE TABLE Material (
                          Id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
                          Label VARCHAR(255) NOT NULL,
                          resourceURL VARCHAR(255),
                          ModifiedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          ModifiedBy UUID,
                          CreatedBy UUID,
                          CreatedOn TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                          IsDeleted BOOLEAN DEFAULT FALSE
);

-- Adding foreign key constraints
ALTER TABLE Building
    ADD CONSTRAINT fk_building_owner FOREIGN KEY (OwnerId) REFERENCES "User"(Id);

ALTER TABLE "User"
    ADD CONSTRAINT fk_user_role FOREIGN KEY (Role) REFERENCES Role(Id);

ALTER TABLE Building
    ADD CONSTRAINT fk_building_modified_by FOREIGN KEY (ModifiedBy) REFERENCES "User"(Id);

ALTER TABLE Building
    ADD CONSTRAINT fk_building_created_by FOREIGN KEY (CreatedBy) REFERENCES "User"(Id);

ALTER TABLE Material
    ADD CONSTRAINT fk_material_modified_by FOREIGN KEY (ModifiedBy) REFERENCES "User"(Id);

ALTER TABLE Material
    ADD CONSTRAINT fk_material_created_by FOREIGN KEY (CreatedBy) REFERENCES "User"(Id);
