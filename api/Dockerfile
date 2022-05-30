FROM adoptopenjdk/openjdk11:alpine-jre

ENV GOOGLE_APPLICATION_CREDENTIALS=sa-key/office-space-manager-349207-945512c5df58.json

ARG JAR_FILE=target/api-0.0.1-SNAPSHOT.jar

WORKDIR /app

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]