class RandomArray
	def initialize
		@arr = []
		@ran_gen = 8.times.map{ Random.rand(27) }.sort
	end

	def randomize(array_select)
		counter = 0
		repeat = false

		until counter == array_select.length || repeat
			until counter == array_select.length || repeat 
				if array_select[counter] == 0 || array_select[counter] == 1 || array_select[counter] == array_select[counter+1] || (array_select[counter] + 1) == array_select[counter+1] || (array_select[counter] + 3) == array_select[counter+1] then
					repeat = true
				else
					counter += 1
				end
			end
		end
		return repeat
	end

	def array_check(array2)
		until !randomize(array2)
			array2 = 8.times.map{ Random.rand(27) }.sort
		end
		@arr << array2 
	end

	def do_over
		5.times {array_check(8.times.map{ Random.rand(27) }.sort)}
	end
end