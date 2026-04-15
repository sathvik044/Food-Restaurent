# Build stage
FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /app

# Copy ALL files from the root directory to ensure Maven wrapper and pom.xml are present
COPY . .

# Ensure mvnw has executable permissions
RUN chmod +x mvnw

# Resolve dependencies and build
RUN ./mvnw clean package -DskipTests

# Run stage
FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

# Copy built jar from build stage
COPY --from=build /app/target/SpringProjrct-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 8081

# Command to run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
