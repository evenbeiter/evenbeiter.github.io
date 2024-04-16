
!pip -qqq install git+https://github.com/openai/whisper.git

# Install the library
!pip -qqq install pytube

# import the module
from pytube import YouTube

# Import the libraries
import whisper
import torch
import os

# Set the device
device = "cuda" if torch.cuda.is_available() else "cpu"

# Load the model
whisper_model = whisper.load_model("small", device=device)


#=============================


def video_to_audio(video_URL, destination, final_filename):

  # Get the video
  video = YouTube(video_URL)

  # Convert video to Audio
  audio = video.streams.filter(only_audio=True).first()

  # Save to destination
  output = audio.download(output_path = destination)

  _, ext = os.path.splitext(output)
  new_file = final_filename + '.mp3'

  # Change the name of the file
  os.rename(output, new_file)

def convert(url):
  # Video to audio
  video_URL = url
  destination = "."
  final_filename = "audio_file_to_convert"
  video_to_audio(video_URL, destination, final_filename)

def format_segments(result_segments):
    lines = []
    for segment in result_segments:
        start_time = segment['start']
        #end_time = segment['end']
        text = segment['text']
        #formatted_text = f"[{format_time_milliseconds(start_time)} --> {format_time_milliseconds(end_time)}] {text}"
        formatted_text = f"[{format_time_milliseconds(start_time)}]{text}"
        lines.append(formatted_text)
    return "\n".join(lines)

def format_time_milliseconds(seconds):
    minutes, seconds = divmod(seconds, 60)
    #hours, minutes = divmod(minutes, 60)
    milliseconds = int((seconds - int(seconds)) * 100)
    #return f"{int(hours):02}:{int(minutes):02}:{int(seconds):02}.{milliseconds:02}"
    return f"{int(minutes):02}:{int(seconds):02}.{milliseconds:02}"

def transcribe():
  audio_file = "audio_file_to_convert.mp3"
  #result = whisper_model.transcribe(audio_file, word_timestamps=True)
  result = whisper_model.transcribe(audio_file)
  result_segments = result['segments']

  print(format_segments(result_segments))
  return format_segments(result_segments)

# Save the formatted result to a text file
def dump_into_txt(formatted_result):
  output_file_path = 'transcribed_text.txt'
  with open(output_file_path, 'w') as output_file:
    output_file.write(formatted_result)
  #print(f"Formatted result saved to {output_file_path}")

def main():
  url = input("Enter Link of Youtube Video to be converted: ")
  convert(url)
  formatted = transcribe()
  #dump_into_txt(formatted)


#=============================

main()
