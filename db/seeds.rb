Message.destroy_all

30.times do
  Message.create!(
    subject: Faker::Hacker.say_something_smart,
    starred: [false, false, false, false, true].sample,
    read: [false, false, false, false, false, false, true].sample,
    labels: [nil, nil, nil, nil, nil, nil, nil, 'dev', 'gschool', 'personal'].sample(2).compact,
    body: 12.times.map{ Faker::Hacker.say_something_smart }.join(" ")
  )
end
