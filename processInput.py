questions = [
    "How many miles do you drive on average per day? A)0-5 B)5-10 C)10-20 D)20+",
    "How long are your showers? A)0-5 B)5-15 C)15+",
    "How often do you order takeout per week? A)0-2 B)2-4 C)4+",
    "What type of car do you drive? A) No car B) Electric C) Hybrid D) Gas",
    "How do you get your home energy? A) Solar Panels B)Green Electricity Plan C) Power Grid"
]

ans0 = input(f'{questions[0]} ')
ans1 = input(f'{questions[1]} ')
ans2 = input(f'{questions[2]} ')
ans3 = input(f'{questions[3]} ')
ans4 = input(f'{questions[4]} ')

ans_dict = {
    'ans0': ans0,
    'ans1': ans1,
    'ans2': ans2,
    'ans3': ans3,
    'ans4': ans4
}

total_score = 0


def assign_points(answer):
  global total_score
  if answer == 'A':
    total_score += 4
  elif answer == 'B':
    total_score += 3
  elif answer == 'C':
    total_score += 2
  elif answer == 'D':
    total_score += 1


for i in range(5):
  assign_points(ans_dict['ans' + str(i)])

print("Here are some suggestion to decrease you're carbon footprint: ")
if ans0 == 'C' or 'D':
  print(
      "By driving so much, you are putting out excessive carbon emissions. Try to use your vehicle less. Walking or biking is not only a great way to decrease your carbon footprint but also get in some exercise!"
  )
if ans1 == 'C':
  print(
      "Taking such long showers can lead to larger amounts of water waste than you would assume. Saving the world occurs with little steps like this. Taking shorter showers can massively help reduce water waste. It can even lower your bills!"
  )
if ans2 == 'C' or 'D':
  print(
      "Ordering takeout so often can lead to a large waste of plastic. Try ordering less takeout and cooking your own food as an alternative whenever you get the opportunity."
  )
if ans3 == 'C' or 'D':
  print(
      "An important step towards improving sustainability is transitioning to electric cars. They can massively help reduce carbon emissions. Hybrids are a decent step in the right direc†ion, though using EVs for transportation is the ideal choice."
  )
if ans4 == 'C':
  print(
      "Not only will solar panels help substantially reduce carbon emissions and the impact your home's power has on the environment, but over time it will save you money by decreasing your electricity bill significantly. Green electricity plans are also a good alternative to using the standard power grid as it ensures your power comes from renewable resources."
  ) 