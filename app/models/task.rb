class Task < ActiveRecord::Base
  # after_initialize :default_values
  # before_save :not_null
  {
    complete: { completed: true, incomplete: false },
    archived: { archived: true, unarchived: false }
  }.each do |attribute, scopes|
    scopes.each do |scpe, value|
      scope scpe, lambda { where(attribute => value) }
    end

    define_method "#{attribute}!" do
      update_attribute(attribute, true)
    end
  end

  # def default_values
  #   self.complete ||= false
  #   self.archived ||= false
  # end

  # def not_null
  #   # if self.complete == 
  # end

  def self.search(query)
    title = where("description like ?", "%#{query}%")
    desc = where("title like ?", "%#{query}%")
    title | desc
  end

end
