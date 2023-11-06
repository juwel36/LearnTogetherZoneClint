

import React from "react";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    alignItems: "center",
    margin: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 12,
    fontWeight: "bold",
  },
  content: {
    fontSize: 14,
    marginBottom: 10,
  },
});

const PDFGenerator = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.content}>Submitted: {data.date}</Text>
          <Text style={styles.content}>Difficulty Level: {data.Difficalty}</Text>
          <Text style={styles.content}>Marks: {data.marks}</Text>
          <Text style={styles.content}>{data.description}</Text>
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
