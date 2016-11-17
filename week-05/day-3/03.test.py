import unittest
import Task_03

class Invalid_Date_Test(unittest.TestCase):
    def test_invalid_test(self):
        self.assertRaises(ValueError, Task_03.Person, 'Laci', 2017)

if __name__ == '__main__':
    unittest.main()
