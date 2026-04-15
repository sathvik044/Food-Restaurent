# Build stage
FROM eclipse-temurin:21-jdk-alpine AS build

WORKDIR /app

# Copy Maven wrapper and configuration
COPY .mvn/ .mvn
COPY mvnw pom.xml ./
# Ensure mvnw has executable permissions
RUN chmod +x mvnw

# Resolve dependencies (cached unless pom.xml changes)
RUN ./mvnw dependency:go-offline

# Copy source and build
COPY src ./src
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
