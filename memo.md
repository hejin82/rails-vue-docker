```ruby
class MyController < ActionController::Base
  include ActionController::Live
  def stream
    response.headers['Content-Type'] = 'text/event-stream'
    100.times {
      response.stream.write "hello world\n"
sleep 1 }
  ensure
    response.stream.close
end end
```

rails routes
                                  Prefix Verb   URI Pattern                                                                                       Controller#Action
                                   tasks GET    /tasks(.:format)                                                                                  tasks#index
                                         POST   /tasks(.:format)                                                                                  tasks#create
                                new_task GET    /tasks/new(.:format)                                                                              tasks#new
                               edit_task GET    /tasks/:id/edit(.:format)                                                                         tasks#edit
                                    task GET    /tasks/:id(.:format)                                                                              tasks#show
                                         PATCH  /tasks/:id(.:format)                                                                              tasks#update
                                         PUT    /tasks/:id(.:format)                                                                              tasks#update
                                         DELETE /tasks/:id(.:format)                                                                              tasks#destroy

