import unittest
import Task_02

class File_Exist_Test(unittest.TestCase):
    def test_exist_test(self):
        self.assertEqual(Task_02.num_of_lines("Text_03.txt"), 0)

if __name__ == '__main__':
    unittest.main()
