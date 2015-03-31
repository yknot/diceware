#include <iostream>
#include <fstream>
#include <map>
#include <string>
#include <stdlib.h>
#include <time.h>


void readWords(std::map<int, std::string> &words);
std::string getWord(std::map<int, std::string> &words);

int main (int argc, char* argv[]) {

  if (argc != 2){
	std::cout << "Usage: ./diceware <number of words>" << std::endl;
	return 0;
  }

  // reset srand
  srand(time(NULL));
  
  // number of words
  int numberOfWords = atoi(argv[1]);


  // create words map
  std::map<int, std::string> words;
  

  // read in the words
  readWords(words);


  std::string w;
  // get words 
  for(int i = 0; i < numberOfWords; i++){
	w = getWord(words);
	
	std::cout << w << ' ';
  }
  std::cout << std::endl;

}



void readWords(std::map<int, std::string> &words) {
  // open file
  std::ifstream wordsFile;
  wordsFile.open("words.txt");
  
  // temp files
  int i;
  std::string w;
  // read in the file
  while(!wordsFile.eof()){

	// read in variables
   	wordsFile >> i;
	wordsFile >> w;

	words[i] = w;

  }

  // close file
  wordsFile.close();

}


std::string getWord(std::map<int, std::string> &words){
  
  int n[5];

  for(int i = 0; i < 5; i++){
    n[i] = rand() % 6 + 1;
  }

  int number = n[0] + 10*n[1] + 100*n[2] + 1000*n[3] + 10000*n[4];

  return words[number];
	
}
