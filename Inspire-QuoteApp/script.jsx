import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

// URL'en for API'en, der giver tilfældige citater
const endpoint = "https://zenquotes.io/api/random";

export const DailyQuoteCard = () => {
  // Citat-tilstanden, useState sat til null (Tilstaden)
  const [quote, setQuote] = useState(null);

  // Brug useEffect hooket til at hente et nyt citat, når komponenten monteres
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        // Hent et tilfældigt citat fra API'en
        const response = await fetch(endpoint);
        const data = await response.json();
        // Opdater citat-tilstanden med det hentede citat
        setQuote(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, []);

  // Vores citater bliver vist i en card
  return (
    <>
      <View>
        <Text>A quote a day, makes the journey of life less grey</Text>
      </View>
      <View style={styles.container}>
        {/* Hvis citat tilstanden ikke er null, vis citatet og forfatteren */}
        {quote ? (
          <>
            <Text style={styles.quoteText}>{quote.q}</Text>
            <Text style={styles.authorText}>- {quote.a}</Text>
          </>
        ) : (
          // Hvis citat tilstanden er null, vis en "Loading..." besked
          <Text>Loading...</Text>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  quoteText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  authorText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
  },
});