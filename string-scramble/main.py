

def string_scramble(str1, str2):

  hash_1 = {}
  hash_2 = {}

  for char in str1:
    hash_1[char] = hash_1.get(char, 0) + 1

  for char in str2:
    hash_2[char] = hash_2.get(char, 0) + 1


  for key in hash_2:
    if key not in hash_1 or hash_1[key] < hash_2[key]:
      return "false"
    
  
  return "true"



# print(string_scramble("cdore", "coder"))
# print(string_scramble("h3llko", "hello"))
# print(string_scramble("rkqodlw", "world"))
