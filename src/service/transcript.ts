import { YoutubeTranscript } from "youtube-transcript";


class TranscriptService {
    async getTranscript(url: string) {
        const videoId = new URL(url).searchParams.get("v");
        if (!videoId) {
            throw new Error("Invalid URL");
        }
        const transcript = await YoutubeTranscript.fetchTranscript(videoId);
        return transcript;
    }
}

export const transcriptService = new TranscriptService();
