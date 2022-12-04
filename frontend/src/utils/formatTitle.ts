export function formatTitle(value: string) {
    return value
        .split(" ")
        .map((sentence) => {
            return sentence[0].toUpperCase() + sentence.substring(1);
        })
        .join(" ");
}
