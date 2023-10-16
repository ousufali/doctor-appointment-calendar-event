



def get_reverse_letters(string_value):
    array_words = string_value.split(" ")
    final_array = []
    for word in array_words:
        is_found_opening = False
        is_found_closing = False

        if word.startswith("("):
            word = word[1:]
            is_found_opening = True

        if word.endswith (")"):
            word = word[:-1]
            is_found_closing = True
            
            
        reversed_word = word[::-1]
        if reversed_word.startswith("."):
            reversed_word = reversed_word[1:] + "."
        if reversed_word.startswith(","):
            reversed_word = reversed_word[1:] + ","
        

        if is_found_opening:
            reversed_word = "(" + reversed_word
        if is_found_closing:
            reversed_word = reversed_word + ")"
        
        final_array.append(reversed_word)
    
    return " ".join(final_array)


def main():
    user_input = input("User input: ")
    
    print("Input value:", user_input)
    reversed_string = get_reverse_letters(user_input)

    print("Reversed:    ", reversed_string)


if __name__ == "__main__":
    main()