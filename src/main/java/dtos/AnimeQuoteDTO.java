package dtos;

public class AnimeQuoteDTO {
    private String quote;

    public AnimeQuoteDTO(String quote) {
        this.quote = quote;
    }

    public String getQuote() {
        return quote;
    }

    public void setQuote(String quote) {
        this.quote = quote;
    }
}
